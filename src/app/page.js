import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCourses />
    </div>
  );
}
