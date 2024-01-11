import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client/core'

const httpLink = new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ... headers,
      authorization: localStorage.getItem('token') || null,
    }
  }));

  return forward(operation);
})

export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
})