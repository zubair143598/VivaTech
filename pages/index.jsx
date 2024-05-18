
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InTouch from "@/components/InTouch";
import MainNavbar from "@/components/MainNavbar";
import Message from "@/components/Message";
import Services from "@/components/Services";
import Head from "next/head";


export default function Home() {


  return (
    <>
      <Head>
        <title>Viva Tech</title>
      </Head>

      <main>
        <MainNavbar/>
       <Hero/>
       <Features/>
       <Services/>
       <Message/>
       <InTouch/>
      </main>
    </>
  );
}
