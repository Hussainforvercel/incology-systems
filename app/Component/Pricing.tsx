

"use client";

import { useState } from "react";
import { Check, Star, Heart } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$40",
    duration: "/month",
    features: [
      "3 Automated Workflows",
      "Basic AI Assistant Access",
      "Email + Slack Integration",
      "Monthly Performance Reports",
      "Email Support",
    ],
  },
  {
    name: "Pro",
    price: "$80",
    duration: "/month",
    popular: true, 
    features: [
      "10+ Automated Workflows",
      "Advanced AI Assistant Features",
      "Bi-Weekly Strategy Reviews",
      "CRM + Marketing Tool Integrations",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    duration: "",
    features: [
      "Unlimited Custom Workflows",
      "Dedicated AI Strategist",
      "API & Private Integrations",
      "Real-Time Performance Dashboards",
      "24/7 Premium Support + SLA",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative bg-[#04070D] text-white py-10 px-2">
      <div className="max-w-5xl mx-auto text-center">
        {/* Pricing Badge (Top) */}
        <div className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6">
          <span className="text-green-400">💰</span> Pricing
        </div>
        {/* Heading */}
        <h2 className="text-3xl font-semibold">
          Flexible Plans for <span className="italic">Everyone</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Choose a plan that fits your goals and scale as you grow
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-6 ">
          <div className="bg-[#1c202b] px-3 py-2 rounded-md flex items-center ">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer ${
                billing === "monthly"
                  ? "bg-black text-white"
                  : "text-gray-400"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm cursor-pointer relative ${
                billing === "yearly"
                  ? "bg-black text-white"
                  : " bg-[#10131C] text-gray-400"
              }`}
            >
              <span>Yearly</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  billing === "yearly"
                    ? "bg-gray-700 text-gray-300"
                    : "bg-black text-white"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl w-full mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative #04070D rounded-xl p-6 border border-neutral-800 transition flex flex-col
                ${
                  plan.popular
                    ? "shadow-md shadow-black/60 hover:shadow-xl hover:shadow-black/80 pb-16 scale-105 origin-top"
                    : "pb-12"
                }`}
            >
              <div>
                {/* Title + Popular Badge */}
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-left">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="flex items-center gap-1 text-xs text-white bg-black px-3 py-1 rounded-full border border-neutral-700">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1 text-left">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm">
                    {plan.duration}
                  </span>
                </div>

                {/*  Button (only center card special effect) */}
                <div className={`relative ${plan.popular ? "mt-10" : "mt-6"}`}>
                  <button
                    className="w-full bg-[##04070D] border border-neutral-700 py-2 rounded-lg flex justify-center items-center gap-2 relative group overflow-hidden transition-all duration-300"
                  >
                    Get Started →

                    {/* White strip + shadow (always visible for center card) */}
                    {plan.popular && (
                      <span
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 
                            w-2/3 h-3 rounded-full
                            bg-transparent
                            shadow-[0_4px_10px_white]
                            opacity-90
                            transition-all duration-500 ease-out
                            group-hover:w-full group-hover:h-4 group-hover:shadow-[0_6px_20px_white] group-hover:opacity-100"
                      ></span>
                    )}
                  </button>

                  <div className="mt-6 border-t border-dotted border-neutral-700 "></div>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2 text-sm text-gray-400">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-gray-400 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-15  text-1xl text-white-400 bg-neutral-900 py-3 px-4 rounded-lg inline-flex items-center gap-2">
          <Heart className="w-4 h-4 bg-[#171A23] text-gray-400" />
          We donate 2% of your membership to pediatric wellbeing
        </div>
      </div>

      {/* White Shadow Separation */}
      <div className="absolute -bottom-2 left-0 w-full ">
        {/* thin line */}
        <div className="relative w-full h-px  bg-white/10">
          {/* glow on top of line */}
          <div className="absolute inset-x-0 bottom-0 h-8 pb-2 
            bg-gradient-to-t from-white/10 to-transparent pointer-events-none">
          </div>
        </div>
      </div>
    </section>
  );
}
