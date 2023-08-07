import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
import Navbar from '@/components/navbar';

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.min.js");
  },[]);

  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
};
