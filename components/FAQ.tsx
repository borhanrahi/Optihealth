"use client";
import { useState } from "react";

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer?: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    number: "01",
    question:
      'Who is the "Optimized Entrepreneur: Unleash Your Peak Performance" course designed for?',
    answer:
      "The course is designed for entrepreneurs of all levels, whether you&apos;re just starting your entrepreneurial journey or have an established business. It caters to individuals seeking to optimize their health, enhance their productivity, and achieve sustainable success in both their personal and professional lives.",
  },
  {
    id: "2",
    number: "02",
    question: "How long is the course?",
    answer:
      "The course is designed for entrepreneurs of all levels, whether you&apos;re just starting your entrepreneurial journey or have an established business. It caters to individuals seeking to optimize their health, enhance their productivity, and achieve sustainable success in both their personal and professional lives.",
  },
  {
    id: "3",
    number: "03",
    question: "Are there any prerequisites to enroll in the course?",
    answer:
      "The course is designed for entrepreneurs of all levels, whether you&apos;re just starting your entrepreneurial journey or have an established business. It caters to individuals seeking to optimize their health, enhance their productivity, and achieve sustainable success in both their personal and professional lives.",
  },
  {
    id: "4",
    number: "04",
    question:
      "Will I have access to course materials after completing the program?",
    answer:
      "The course is designed for entrepreneurs of all levels, whether you&apos;re just starting your entrepreneurial journey or have an established business. It caters to individuals seeking to optimize their health, enhance their productivity, and achieve sustainable success in both their personal and professional lives.",
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<string>("1");

  return (
    <section className="bg-[#0B0F17] py-12 md:py-20">
      <div className="max-w-[1016px] mx-auto px-4 md:px-8 lg:px-0">
        {/* Title */}
        <h2 className="text-[40px] md:text-[48px] text-white/85 font-light mb-16 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-[#1E2832] rounded-lg bg-[#0A0E14]"
            >
              <button
                onClick={() => setOpenItem(openItem === item.id ? "" : item.id)}
                className="w-full text-left p-6 md:p-8"
              >
                <div className="space-y-3">
                  <span className="text-white/60 text-sm font-light">
                    {item.number}
                  </span>
                  <h3 className="text-white text-lg md:text-xl font-light">
                    {item.question}
                  </h3>
                </div>
                {item.answer && openItem === item.id && (
                  <div className="mt-4 text-white/60 text-base font-light leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
