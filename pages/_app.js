import Footer from "../Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import "../styles/notFoundPage.css";
import "../styles/responsive/customRes.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigation from "../Components/Navigation/Navigation";
import NavBar from "../Components/NavBar";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // console.log(pageProps,Component)
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <section>
        {/* <Navigation/> */}
        <NavBar />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </section>
    </>
  );
}
export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
