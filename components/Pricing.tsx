const Pricing = () => {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32">
      {/* Main Container */}
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-white/85 to-white/50 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            Get Instant Access
          </h2>
          <p className="text-base text-white md:text-lg lg:text-xl">
            We&apos;ll double your focus and energy in 14-days using tracking
            data or we&apos;ll refund you 150% on the spot.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 - Monthly */}
          <div className="flex flex-col space-y-6">
            {/* Main Card */}
            <div className="rounded-xl border border-white/15 bg-[#0B131D] p-6">
              <div className="mb-6">
                <div className="mb-4">
                  <h3 className="text-lg text-white">Monthly</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">€2195</span>
                    <span className="ml-1 text-sm text-white/80">
                      per month
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Perfect for individuals who want to transform their health
                </p>
              </div>
              <button className="w-full rounded-full bg-[#162130] px-6 py-3 text-white shadow-lg transition hover:bg-[#1c2836]">
                Select Plan
              </button>
            </div>

            {/* Features Lists */}
            <div className="space-y-6">
              <PricingFeatures />
            </div>
          </div>

          {/* Card 2 - Quarterly */}
          <div className="flex flex-col space-y-6">
            {/* Main Card */}
            <div className="rounded-xl border border-white/15 bg-[#0B131D] p-6">
              <div className="mb-6">
                <div className="mb-4">
                  <h3 className="text-lg text-white">Quarterly</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">€1795</span>
                    <span className="ml-1 text-sm text-white/80">
                      per month
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                      Save 18%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Best value for committed health optimizers
                </p>
              </div>
              <button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-white shadow-lg transition hover:from-blue-600 hover:to-blue-700">
                Select Plan
              </button>
            </div>

            {/* Features Lists */}
            <div className="space-y-6">
              <PricingFeatures />
            </div>
          </div>

          {/* Card 3 - One-time Payment */}
          <div className="flex flex-col space-y-6">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0B131D] p-6">
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0">
                <div className="absolute -left-[50%] top-0 h-[200%] w-[200%] bg-[#C1CBF1]/10 blur-[100px]" />
                <div className="absolute left-[20%] top-[20%] h-[100%] w-[100%] bg-[#CCE9F7]/10 blur-[80px]" />
              </div>

              {/* Content */}
              <div className="mb-6 relative">
                <div className="mb-4">
                  <h3 className="text-lg text-white">One-time payment</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-white">€4995</span>
                  </div>
                  <div className="mt-1">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-500">
                      Save 25%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  Short description about the package will goes here
                </p>
              </div>

              {/* Button */}
              <button className="w-full rounded-full bg-[#162130] px-6 py-3 text-white shadow-lg transition hover:bg-[#1c2836]">
                Select Plan
              </button>
            </div>

            {/* Features Lists */}
            <div className="space-y-6">
              <PricingFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted PricingFeatures component for reuse
const PricingFeatures = () => (
  <>
    {/* Lifetime Access Section */}
    <div>
      <h4 className="mb-4 text-lg font-medium text-white">
        Lifetime Product Access
      </h4>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Access to our exclusive online product
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Comprehensive health tracking system
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Personalized dashboard
        </li>
      </ul>
    </div>

    {/* Coaching Section */}
    <div>
      <h4 className="mb-4 text-lg font-medium text-white">
        90 days of Coaching and Support
      </h4>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Weekly 1-on-1 coaching calls
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          24/7 chat support
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Personalized action plans
        </li>
      </ul>
    </div>

    {/* Bonuses Section */}
    <div>
      <h4 className="mb-4 text-lg font-medium text-white">Bonuses</h4>
      <ul className="space-y-3">
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Blood and DNA reports (worth €995,-)
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Performance Recipe Book (worth €95,-)
        </li>
        <li className="flex items-center gap-2 text-sm text-white">
          <CheckIcon />
          Access to our SaaS (worth €3995,-)
        </li>
      </ul>
    </div>
  </>
);

// CheckIcon component
const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export default Pricing;
