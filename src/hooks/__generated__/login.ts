/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginUserInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_loginUser {
  __typename: "LoggedUserOutput";
  /**
   * Generated access_token of the user
   */
  access_token: string;
  /**
   * email of the user
   */
  email: string;
  /**
   * First Name of the user
   */
  firstName: string;
  /**
   * Last Name of the user
   */
  lastName: string;
}

export interface login {
  loginUser: login_loginUser;
}

export interface loginVariables {
  loginUserInput: LoginUserInput;
}
