import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import Comparison from "@/components/Comparison";
import Footer from "@/components/footer";
import Bottom from "@/components/bottom";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Comparison />
      <Bottom />
      <Footer />
    </div>
  );
}
