import Image from "next/image";

const TestimonialTwo = () => {
  return (
    <section className="bg-[#0B1120] py-16 px-4 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch bg-[#0F1825] rounded-2xl overflow-hidden">
          {/* Image Section - Mobile first */}
          <div className="relative w-full h-72 lg:h-[500px] lg:w-1/2">
            <Image
              src="/humanone.png"
              alt="Testimonial"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center p-6 md:p-8 lg:p-12 lg:w-1/2 space-y-6">
            {/* Pill Label */}
            <div className="inline-flex px-4 py-1 items-center rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="text-sm text-white/80">Client Success</span>
            </div>

            {/* Quote */}
            <blockquote className="text-white text-lg md:text-xl">
              &quot;OptiHealth&apos;s solutions not only improved my health, but
              also the efficiency and morale of my team. Our productivity has
              skyrocketed, and it&apos;s visibly reflected in our business
              results.&quot;
            </blockquote>

            {/* Context */}
            <p className="text-white/70 text-sm">
              In just a few months, Johnson saw a marked improvement in his
              energy levels and mental clarity, leading to better
              decision-making and a positive impact on company culture and
              growth.
            </p>

            {/* Author Section */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="space-y-0.5">
                <h4 className="text-white font-medium">Emile Johnson</h4>
                <p className="text-white/60 text-sm">Chief Officer, EVELO</p>
              </div>

              {/* Company Logo with RSS Icon */}
              <div className="ml-auto flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
                </svg>
                <span className="text-white">Webflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
