import { gql } from 'graphql-tag'
import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import apolloClient from '.';

provideApolloClient(apolloClient)