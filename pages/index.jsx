import { getSession } from "next-auth/react";

export default function Index() {
  return (
    <div className="text-center">
      <h1 className="text-center">Hello Sayeful Islam</h1>
      <h4>sayeful@gmail.com</h4>
    </div>
  );
};

export async function getServerSideProps({req}) {
  const session = await getSession({ req });
  if(!session) {
    return {
      redirect: {
        destination: '/authentication',
        permeanent: false
      }
    };
  };
  return {
    props: {
      session
    }
  };
};