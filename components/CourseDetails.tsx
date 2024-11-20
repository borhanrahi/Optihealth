"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const CourseDetails = () => {
  return (
    <section className="py-8 md:py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-[74px] mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-0 md:flex-1 bg-gradient-to-b from-white/85 to-white/50 bg-clip-text text-transparent">
            OptiHealth&apos;s Comprehensive Wellness Journey
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-white/90 md:flex-1">
            Embark on a transformative journey with OptiHealth, where health and
            business success go hand in hand. Discover how integrating health
            into your business strategy can lead to remarkable growth and
            sustainability.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8 lg:space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ModuleCard
              module="01"
              title="Sleep Optimization"
              description="Our Sleep Optimization Module provides advanced tools to monitor and enhance your sleep quality. Experience the benefits of waking up more refreshed, gaining increased energy levels throughout the day, and consequently driving higher productivity and revenue for your business."
              image="/image15.png"
            />
            <ModuleCard
              module="02"
              title="Fuel Your Success"
              description="This module focuses on optimizing your diet for peak performance. By tracking your nutritional intake, you'll enjoy a balanced diet that boosts your cognitive functions and physical health, leading to improved decision-making and business outcomes."
              image="/image15.png"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ModuleCard
              module="03"
              title="Stress Management"
              description="Learn to effectively manage stress with our specialized module. It offers techniques and tools to reduce anxiety, leading to clearer thinking, enhanced creativity, and a more positive workplace atmosphere, all crucial for business success."
              image="/image15.png"
            />
            <ModuleCard
              module="04"
              title="Physical Activity"
              description="Our Physical Activity Tracker encourages regular exercise, vital for maintaining health and vigor. Active employees report higher levels of focus and engagement, directly correlating to increased efficiency and profitability in your business operations."
              image="/image15.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ModuleCardProps {
  module: string;
  title: string;
  description: string;
  image: string;
}

const ModuleCard = ({ module, title, description, image }: ModuleCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex-1 bg-[#0A111A] border border-white/[0.25] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="relative h-48 md:h-64 lg:h-[325px] overflow-hidden py-6 md:py-8 lg:py-12">
        <div className="absolute right-0 w-[75%] h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="p-4 md:p-6 lg:p-10 space-y-2 md:space-y-4 lg:space-y-8">
        <div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/25">
          <span className="text-xs md:text-sm text-white">Module {module}</span>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
