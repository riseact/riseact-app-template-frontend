import { ApolloClient, InMemoryCache } from "@apollo/client";
import urlJoin from "url-join";

const gqlClient = new ApolloClient({
  uri: urlJoin(location.origin, "/graphql"),
  cache: new InMemoryCache(),
});

export default gqlClient;
