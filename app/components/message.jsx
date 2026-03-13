"use client";

import { motion } from "framer-motion";

export default function Message() {
  return (
    <section className="section__container message__container">

      <motion.h2
        className="message__title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        MESSAGE FOR YOU
      </motion.h2>

      <motion.p
        className="message__text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hi ~ I'm Karim
        <br /><br />
        Whether your goal is fat loss, building muscle, or simply improving
        your overall fitness — you're in the right place.
        <br /><br />
        I offer fully customized training and nutrition plans tailored to your
        lifestyle and goals, with continuous support and expert guidance every
        step of the way.
        <br /><br />
        Let's work together to unlock your full potential — starting today.
      </motion.p>

    </section>
  );
}