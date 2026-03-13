"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic Plan",
    price: "$16",
    features: ["Smart workout plan", "At home workouts"],
  },
  {
    title: "Weekly Plan",
    price: "$25",
    features: ["PRO Gyms", "Smart workout plan", "At home workouts"],
  },
  {
    title: "Monthly Plan",
    price: "$45",
    features: [
      "ELITE Gyms & Classes",
      "PRO Gyms",
      "Smart workout plan",
      "At home workouts",
      "Personal Training",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="price__container">

      <motion.h2
        className="section__header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR PRICING PLAN
      </motion.h2>

      <motion.p
        className="section__subheader"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </motion.p>

      <div className="price__grid">
        {plans.map((plan, index) => (
          <motion.div
            className={`price__card ${index === 1 ? "active" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="price__card__content">
              <h4>{plan.title}</h4>
              <h3>{plan.price}</h3>

              {plan.features.map((feature, i) => (
                <p key={i}>✔ {feature}</p>
              ))}
            </div>

            <button className="price__btn">Join Now</button>
          </motion.div>
        ))}
      </div>

    </section>
  );
}