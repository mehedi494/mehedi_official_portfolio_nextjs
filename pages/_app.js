import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return <div className="backdrop-blur-2xl">
    {
      getLayout(<Component {...pageProps} />)
    }
  </div>;
}

export default MyApp;
