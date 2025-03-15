import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurDestinations from "@/components/home/OurDestinations";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <PopularDestinations />
      <WhyChooseUs />
      <OurDestinations />
      <Newsletter />
    </div>
  );
}
