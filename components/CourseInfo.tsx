const CourseInfo = () => {
  return (
    <section className="bg-[#0B0F17] py-16 md:py-24 px-4 md:px-8 lg:px-0">
      <div className="max-w-[1016px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-[74px] mb-20">
          <div className="mb-8 lg:mb-0 lg:w-[446px]">
            <h2 className="text-[24px] md:text-[30px] lg:text-[36px] leading-tight text-transparent bg-gradient-to-b from-white/85 to-white/50 bg-clip-text font-light">
              OptiHealth is a leading company dedicated to helping entrepreneurs
              unlock their full potential and achieve peak performance in both
              life and business.
            </h2>
          </div>

          <div className="lg:w-[496px]">
            <p className="text-white/60 text-lg mb-6">
              With a mission to optimize health, productivity, and overall
              well-being, OptiHealth provides customized solutions and guidance
              to empower entrepreneurs to work smarter, not harder.
            </p>
            <p className="text-white/60 text-lg">
              Our team of experienced health optimization and productivity
              experts brings a wealth of knowledge and expertise to the table.
              We understand the unique challenges faced by entrepreneurs and are
              passionate about helping them thrive. Through our comprehensive
              programs and personalized approach, we provide entrepreneurs with
              the tools, strategies, and support needed to achieve sustainable
              success.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            className="p-10 rounded-3xl"
            style={{
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderImage:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 100%) 1",
            }}
          >
            <h3 className="text-[56px] lg:text-[64px] text-white font-light text-center mb-4">
              1.3K+
            </h3>
            <p className="text-white/60 text-center">
              Entrepreneurs transformed
            </p>
          </div>

          <div
            className="p-10 rounded-3xl"
            style={{
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderImage:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 100%) 1",
            }}
          >
            <h3 className="text-[56px] lg:text-[64px] text-white font-light text-center mb-4">
              35%
            </h3>
            <p className="text-white/60 text-center">
              Increasing their avg. revenue
            </p>
          </div>

          <div
            className="p-10 rounded-3xl"
            style={{
              borderTop: "1px solid",
              borderLeft: "1px solid",
              borderImage:
                "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 100%) 1",
            }}
          >
            <h3 className="text-[56px] lg:text-[64px] text-white font-light text-center mb-4">
              98%
            </h3>
            <p className="text-white/60 text-center">Satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
