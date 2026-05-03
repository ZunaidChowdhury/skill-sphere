
import ErrorMessage from "@/components/ErrorMessage";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import Hero from "@/components/sections/Hero";
import LearningTips from "@/components/sections/LearningTips";
import NewReleases from "@/components/sections/NewReleases";
import TopInstructors from "@/components/sections/TopInstructors";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { getCourses } from "@/lib/utils";

export default async function Home() {
  let courses = null;
  let error = null;

  try {
    courses = await getCourses();
  } catch (err) {
    console.error('Failed to fetch courses:', err); 
    error = true; 
  }

  return (
    <div>
      <Hero />
      {
        error ? <ErrorMessage /> : <>
          <FeaturedCourses courses={courses} />
          <NewReleases courses={courses} />
        </>
      }

      <LearningTips />
      <TopInstructors />
      <WhyChooseUs />
    </div>
  );
}
