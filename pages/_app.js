import Footer from "Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";

import "styles/notFoundPage.css";
import "styles/responsive/customRes.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigation from "../Components/Navigation/Navigation";
import NavBar from "../Components/NavBar";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  // console.log(pageProps,Component)

  return (
    <>
      <section className="forCursor">
        {/* <Navigation/> */}
        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </section>
    </>
  );
}
export default MyApp;
