import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMucora from "@/components/WhyMucora";
import Products from "@/components/Products";
import Process from "@/components/Process";
import DeliveryArea from "@/components/DeliveryArea";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyMucora />
        <Process />
        <Products />
        <DeliveryArea />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
