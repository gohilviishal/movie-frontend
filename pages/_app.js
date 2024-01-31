import Head from 'next/head';
import '../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../contexts/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider> 
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
