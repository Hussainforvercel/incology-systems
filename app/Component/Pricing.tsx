

"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Star, Heart, Tag } from "lucide-react";

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

// Framer-motion animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative text-white py-10 px-2 bg-[#04070D]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Pricing Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          className="inline-flex items-center gap-2 mt-4 text-xs font-medium text-white bg-black px-4 py-1.5 rounded-full border border-neutral-700 shadow-md shadow-black/40 mb-6"
        >
          <Tag size={14} className="text-white" /> Pricing
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          className="text-3xl font-semibold"
        >
          Flexible Plans for <span className="italic">Everyone</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          className="text-gray-400 mt-2"
        >
          Choose a plan that fits your goals and scale as you grow
        </motion.p>

        {/* Billing Toggle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          className="flex justify-center mt-6"
        >
          <div className="bg-[#1c202b] px-3 py-2 rounded-md flex items-center">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-md text-sm cursor-pointer ${
                billing === "monthly" ? "bg-black text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm cursor-pointer relative ${
                billing === "yearly"
                  ? "bg-black text-white"
                  : "bg-[#10131C] text-gray-400"
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
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-6xl w-full mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i + 4}
              className={`relative #04070D rounded-xl p-6 border border-neutral-800 transition flex flex-col ${
                plan.popular
                  ? "shadow-md shadow-black/60 hover:shadow-xl hover:shadow-black/80 pb-16 scale-105 origin-top"
                  : "pb-12"
              }`}
            >
              <div>
                {/* Title + Popular Badge */}
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-left">{plan.name}</h3>
                  {plan.popular && (
                    <span className="flex items-center gap-1 text-xs text-white bg-black px-3 py-1 rounded-full border border-neutral-700">
                      <Star className="w-3 h-3" /> Popular
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-1 text-left">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 text-sm">{plan.duration}</span>
                </div>

                {/* Button */}
                <div className={`relative ${plan.popular ? "mt-10" : "mt-6"}`}>
                  <button className="w-full bg-[#04070D] border border-neutral-700 py-2 rounded-lg flex justify-center items-center gap-2 relative group overflow-hidden transition-all duration-300">
                    Get Started
                  </button>
                  <div className="mt-6 border-t border-dotted border-neutral-700"></div>
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
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={7}
          className="mt-15 text-1xl text-white bg-neutral-900 py-3 px-4 rounded-lg inline-flex items-center gap-2"
        >
          <Heart className="w-4 h-4 bg-[#171A23] text-gray-400" />
          We donate 2% of your membership to pediatric wellbeing
        </motion.div>
      </div>
    </section>
  );
}
