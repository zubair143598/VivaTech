
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.scss";
import ScrollToTop from "react-scroll-to-top";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      <ScrollToTop className="px-[7px] bg-red" color="white" style={{backgroundColor:"red"}} smooth/>
      <Footer/>
    </>
   
  );
}
