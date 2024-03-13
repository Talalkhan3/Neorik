import Header from "@/components/Header/Header";
import Hero from "./Hero";
import Whatwedo from "./Whatwedo";
import Discover from "./Discover";
import Waysofworking from "./Waysofworking";
import Services from "./Services";
import Clients from "./Clients";
import Footer from "@/components/Footer/Footer";
import Cta from "@/components/Cta/Cta";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Whatwedo />
      <Discover />
      <Waysofworking />
      <Services />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
