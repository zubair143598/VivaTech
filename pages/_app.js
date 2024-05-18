
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer/>
    </>
   
  );
}
