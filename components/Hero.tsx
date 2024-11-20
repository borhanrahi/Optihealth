"use client";

import Image from "next/image";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] lg:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(69,69,69,0.48)] to-[rgba(61,61,61,1)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#08152099] to-transparent" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex min-h-[60vh] lg:min-h-screen items-center pt-16 lg:pt-0">
          <div className="max-w-full lg:max-w-3xl space-y-6 lg:space-y-10">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent">
                Transform Your Health, Transform Your Business
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-prose">
                Are you a business leader who feels constantly drained,
                struggling to balance personal health with professional success?
                You&apos;re not alone. Our mission is to bridge the gap between
                your health and your business&apos;s performance.
              </p>
            </div>

            <button className="flex items-center space-x-3 lg:space-x-4 group">
              <div className="relative h-12 w-12 lg:h-16 lg:w-16">
                <div
                  className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm 
                               group-hover:bg-white/30 transition-colors duration-300"
                />
                <div
                  className="absolute inset-2 flex items-center justify-center rounded-full 
                               bg-white group-hover:bg-white/90 transition-colors duration-300"
                >
                  <Play className="h-5 w-5 lg:h-6 lg:w-6 text-[#1B1536]" />
                </div>
              </div>
              <span className="text-base lg:text-lg font-medium text-white">
                Watch Introduction Video
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
