import {
  // getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";

import { Product, useMeQuery } from "../../graphql/generated/graphql";
import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

// interface HomeProps {
//   data: {
//     products: Product[];
//   };
// }

function Home() {
  const { user } = useUser();
  /* ESTE É O FORMATO PADRÃO DA QUERIES EM CLIENT SIDE */
  // const { data, loading, error } = useGetProductsQuery();
  const { data: me } = useMeQuery();

  return (
    <div>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      {/* <pre>{JSON.stringify(data.products, null, 2)}</pre> */}
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* <a href="/api/auth/logout">Logout</a> */}
    </div>
  );
}

/**
 * Este código é o mesmo que
 */
// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//   const session = getSession(req, res);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/api/auth/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };

/**
 * Este código:
 */
/* ESTE É O FORMATO PADRÃO DA QUERIES EM SERVER SIDE */
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // const { req, res } = ctx
    // console.log(getAccessToken(req, res));

    // return getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});

// @ts-ignore
export default withApollo(ssrGetProducts.withPage()(Home));
