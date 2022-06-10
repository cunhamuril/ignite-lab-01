import { GetServerSidePropsContext, NextPage } from "next";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  from,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

export type ApolloClientContext = GetServerSidePropsContext

// HOC - High Order Component
export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      /**
       * props.apolloState => é o próprio Apollo que coloca, vem das props do getServerSideProps
       */
      <ApolloProvider client={getApolloClient(props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
};

/**
 * Obter Apollo Client
 * @param ssrCache cache do lado do servidor
 * @returns apolloClient
 */
export function getApolloClient(ssrCache?: NormalizedCacheObject) {
  const httpLink = createHttpLink({
    uri: "http://localhost:3332/graphql",
    fetch,
  });

  const cache = new InMemoryCache().restore(ssrCache ?? {});

  return new ApolloClient({
    link: from([httpLink]),
    cache,
  });
}
