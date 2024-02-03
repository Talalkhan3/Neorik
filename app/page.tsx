import Description from "@/components/Description/Description";
import Questions from "@/components/FAQS/Questions";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Description />
      <Questions />
      <Footer />
    </main>
  );
}
