import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // component is the actual content of our page and it changes as we navigate through each page. we can wrap any component that we want to have on all our pages here
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
