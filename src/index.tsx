import { setContext } from '@apollo/client/link/context/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://api.easyhome.finance/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const user = localStorage.getItem('user') || '';
  // return the headers to the context so httpLink can read them
  const parsedUser = JSON.parse(user)
  if(!parsedUser) return;
  return {
    headers: {
      ...headers,
      authorization: parsedUser?.access_token ? `Bearer ${parsedUser?.access_token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
//
// const client = new ApolloClient({
//   uri: 'https://api.easyhome.finance/',
//   cache: new InMemoryCache(),
// });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
        <App />
        </AuthProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
