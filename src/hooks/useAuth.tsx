import { useMutation } from '@apollo/client';
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUserInput } from '../../__generated__/globalTypes';
import { LOGIN } from './qraphql';
import { useLocalStorage } from "./useLocalStorage";

export interface IAuthProvider {
  children: JSX.Element
}

export type User = {
  username: string,
  access_token?: string
}

export interface IAuth {
  user: User;
  login: (data: LoginUserInput) => void;
  logout: () => void;
}


const defaultContext: IAuth = {
  user: {
    username: '',
    access_token: ''
  },
  login: (data: LoginUserInput) => { console.log('login.default')},
  logout: () => {}
}

const AuthContext = createContext<IAuth>(defaultContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [signIn, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const login = async (data: LoginUserInput) => {
    console.log('AuthProvider/login', data)
    const userResponce = await signIn({ variables: { loginUserInput: data }})
    setUser(userResponce.data.loginUser);
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
