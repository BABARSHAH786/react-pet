import React from 'react';
import Header from "../components/header";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
// import About from "./About/";


export default function Home() {
  return (
    <div>Home
           <>
        <About />
        <Header />
        <Banner />
        <Popular />
        {/* <Footer /> */}
        </>
    </div>
  )
}
