"use client";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="relative bg-[#0F1819] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-[1]" />

          <div className="absolute inset-0 overflow-hidden z-[2]">
            <div className="absolute -left-[197px] top-0 w-[692px] h-[606px] bg-[#C1CBF1] blur-[237px] opacity-80" />
            <div className="absolute left-[249px] top-0 w-[527px] h-[375px] bg-[#CCE9F7] blur-[237px] opacity-80" />
          </div>

          <div className="absolute inset-0 z-[3]">
            <Image
              src="/GridCTA.png"
              alt="Grid Pattern"
              fill
              className="object-cover opacity-40 mix-blend-overlay"
              priority
            />
          </div>

          <div className="absolute inset-0 overflow-hidden mix-blend-overlay z-[4]">
            <div className="absolute left-[2px] bottom-[505px] w-[379px] h-[491px] bg-[#CDF5D4] blur-[159px] opacity-80" />
            <div className="absolute left-0 bottom-[561px] w-[360px] h-[301px] bg-[#FAD5B3] blur-[159px] opacity-80" />
            <div className="absolute left-[327px] bottom-[528px] w-[277px] h-[301px] bg-[#EDF1FC] blur-[159px] opacity-80" />
            <div className="absolute left-[212px] bottom-[527px] w-[157px] h-[139px] bg-[#F1BCBC] blur-[159px] opacity-80" />
          </div>

          <div className="absolute inset-0 z-[5]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
          </div>

          <div className="relative z-[6] px-4 sm:px-8 md:px-20 py-10 md:py-20 grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-[28px] md:text-[40px] leading-tight bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent font-light mb-6">
                It&apos;s never too late to unlock your peak performance
              </h2>
            </div>

            <div>
              <p className="text-white/80 text-base md:text-lg mb-6">
                Join the &quot;Optimized Entrepreneur: Unleash Your Peak
                Performance&quot; course today and embark on a transformative
                journey that will revolutionize the way you work, live, and
                succeed.
              </p>

              <button className="w-full md:w-auto group flex items-center justify-center md:justify-start gap-2 px-6 py-3 bg-[#151819] rounded-full border border-white/20 hover:bg-[#1A1E1F] transition-colors">
                <span className="text-white">Enroll now</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M5.25 3.25L10.75 8.75L5.25 14.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
