import Header from "@/components/Header/Header";
import React from "react";
import Hero from "./Hero";
import Designservices from "./Designservices";
import Wireframe from "./Wireframe";
import Footer from "@/components/Footer/Footer";
import Questions from "@/components/Basictools/Basictools";
import Cta from "@/components/Cta/Cta";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Designservices />
      <Wireframe />
      <Questions />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
