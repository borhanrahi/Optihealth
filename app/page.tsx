import CourseDetails from "@/components/CourseDetails";
import CourseInfo from "@/components/CourseInfo";
import CTA from "@/components/CTA";
import Divider from "@/components/Divider";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import TestimonialTwo from "@/components/TestimonialTwo";

const page = () => {
  return (
    <main>
      <Hero />
      <Testimonial />
      <Divider />
      <CourseDetails />
      <Divider />
      <Pricing />
      <TestimonialTwo />
      <CourseInfo />
      <FAQ />
      <CTA />
    </main>
  );
};

export default page;
