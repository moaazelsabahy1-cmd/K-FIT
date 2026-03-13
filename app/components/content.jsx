"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClassSection() {
  return (
    <section className="section__container class__container">

      <motion.div
        className="class__image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg__blur"></span>

        <Image
          src="/images/photo_2025-12-18_23-24-35.jpg"
          alt="class"
          width={400}
          height={500}
          className="class__img-1"
        />
      </motion.div>

      <motion.div
        className="class__content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section__header">
          THE CLASS YOU WILL GET HERE
        </h2>

        <p>
          Led by our team of expert and motivational instructors, "The Class You
          Will Get Here" is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises. Each class is carefully curated to keep you engaged and
          challenged, ensuring you never hit a plateau in your fitness
          endeavors.
        </p>

        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Join now
        </motion.button>
      </motion.div>

    </section>
  );
}