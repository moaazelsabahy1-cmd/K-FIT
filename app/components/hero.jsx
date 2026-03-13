"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="section__container header__container">
      <motion.div
        className="header__content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="bg__blur"></span>
        <span className="bg__blur header__blur"></span>

        <h1>
          <span>MAKE</span> YOUR BODY SHAPE
        </h1>
      </motion.div>

      <motion.div
        className="header__image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/photo_2025-12-18_22-57-32.jpg"
          alt="header"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
}
