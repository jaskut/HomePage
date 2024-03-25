import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client/core'

const url = import.meta.env.VITE_GRAPHQL_URL_LAN.includes(location.host) ? import.meta.env.VITE_GRAPHQL_URL_LAN : import.meta.env.VITE_GRAPHQL_URL
const httpLink = new HttpLink({ uri: url });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ... headers,
      authorization: `JWT ${localStorage.getItem('token')}`,
    }
  }));

  return forward(operation);
})

export default new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
})