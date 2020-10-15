import '../styles/globals.css';
import React from 'react'; 
import { wrapper } from '../store/store';
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const start = () => {
      console.log('start')
      setLoading(true);
    };
    const end = () => {
      console.log('end')
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
