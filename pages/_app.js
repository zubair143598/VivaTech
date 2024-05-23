
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
   
  );
}
