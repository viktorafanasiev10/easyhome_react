import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($loginUserInput:LoginUserInput!) {
        loginUser(loginUserInput:$loginUserInput) {
            access_token
            email
            firstName
            lastName
        }
    }
`;
