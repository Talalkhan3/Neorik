import Cta from "@/components/Cta/Cta";
import Description from "@/components/Description/Description";
import Expertise from "@/components/Expertise/Expertise";
import Basictools from "@/components/Basictools/Basictools";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import Services from "@/components/Services/Services";
import Whyus from "@/components/whyus/Whyus";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Description />
      <Basictools />
      <Whyus />
      <Expertise />
      <Cta />
      <Footer />
    </main>
  );
}
