import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // L'URL du serveur GraphQL
  cache: new InMemoryCache(),
});

export default client;
