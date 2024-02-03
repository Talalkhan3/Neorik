import Header from "@/components/Header/Header";
import Hero from "./Hero";
import Whatwedo from "./Whatwedo";
import Discover from "./Discover";
import Waysofworking from "./Waysofworking";
import Services from "./Services";
import Clients from "./Clients";
import Footer from "@/components/Footer/Footer";

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
   
      <Footer />
    </div>
  );
};

export default page;
