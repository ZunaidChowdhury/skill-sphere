import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Hero from "@/components/sections/Hero";
import LearningTips from "@/components/sections/LearningTips";
import TopInstructors from "@/components/sections/TopInstructors";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <FeaturedCourses /> */}
      <LearningTips />
      <TopInstructors />
      <WhyChooseUs />
    </div>
  );
}
