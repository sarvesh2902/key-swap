import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Blog from "@/components/buy";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "KeySwap | API key marketplace",
  description: "Buy and sell API keys securely",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      {/* <About /> */}
      <FeaturesTab />
      {/* <Integration /> */}
      <FAQ />
      {/* <Pricing /> */}

      {/* <Blog /> */}
    </main>
  );
}
