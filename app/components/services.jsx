"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "24/7 Coach Support",
    desc: "Stay connected with your coach anytime for guidance, motivation, and quick answers.",
  },
  {
    title: "Custom Workout Plan",
    desc: "A fully personalized training program designed based on your goals and fitness level.",
  },
  {
    title: "Nutrition Plan",
    desc: "A structured nutrition plan to help you burn fat, gain muscle, and improve health.",
  },
  {
    title: "Progress Tracking",
    desc: "Weekly check-ins and feedback to make sure you're always progressing.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Coaching Services
      </motion.h2>

      <div className="services-container">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}