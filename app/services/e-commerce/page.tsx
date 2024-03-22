import Header from "@/components/Header/Header";
import React from "react";
import Hero from "./Hero";
import Ecom1 from "./Ecom1";
import Footer from "@/components/Footer/Footer";
import Questions from "@/components/Basictools/Basictools";
import Cta from "@/components/Cta/Cta";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Ecom1 />
      <Questions />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
