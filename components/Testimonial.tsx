"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    quote:
      "Working with them transformed not just my health but my entire approach to leadership.",
  },
  {
    name: "Sarah Johnson",
    role: "CTO, InnovateTech",
    quote:
      "The personalized approach and attention to detail made all the difference in our team's wellness journey.",
  },
  {
    name: "Michael Chen",
    role: "Founder, GrowthLabs",
    quote:
      "Their holistic approach to health and leadership coaching has helped us build a more resilient and energized team.",
  },
];

const TestimonialCard = ({ name, role, quote }: TestimonialProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col h-full p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/35 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {/* Quote */}
      <div className="flex-grow">
        <p className="text-white/90 text-sm lg:text-lg leading-relaxed">
          &quot;{quote}&quot;
        </p>
      </div>

      {/* Avatar and Info */}
      <div className="flex items-center gap-4 lg:gap-5 mt-4 lg:mt-6">
        <div className="relative h-12 w-12 lg:h-14 lg:w-14 flex-shrink-0">
          <Image
            src="/AvatarOne.png"
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-white font-medium text-sm lg:text-lg">{name}</h4>
          <p className="text-white/60 text-xs lg:text-base">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="py-8 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 lg:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/60 text-sm lg:text-lg max-w-2xl mx-auto">
            Hear from business leaders who have transformed their approach to
            health and leadership
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          {/* Mobile View (Single Column) */}
          <div className="block lg:hidden space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="max-w-md mx-auto">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>

          {/* Desktop Grid (3 Cards) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
