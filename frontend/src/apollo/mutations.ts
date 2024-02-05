import { gql } from 'graphql-tag'
import { provideApolloClient, useMutation } from '@vue/apollo-composable';
import apolloClient from '.';

provideApolloClient(apolloClient)

export const tokenAuth = useMutation(gql`
  mutation ($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`);