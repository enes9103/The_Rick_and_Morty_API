import Head from "next/head";
// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div > 
      <Head>
        <title>Rick and Morty Wiki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>{children}</main>
      <Footer />
    </div>
  );
}