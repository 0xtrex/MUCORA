import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyMycora from "@/components/WhyMycora";
import Products from "@/components/Products";
import Process from "@/components/Process";
import BulkCatering from "@/components/BulkCatering";
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
        <WhyMycora />
        <Process />
        <Products />
        <BulkCatering />
        <DeliveryArea />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
