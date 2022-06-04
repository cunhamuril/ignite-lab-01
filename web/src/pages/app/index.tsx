import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
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
export const getServerSideProps = withPageAuthRequired();
