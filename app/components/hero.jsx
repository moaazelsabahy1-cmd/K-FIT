"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("hero");

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
          <span>{t("make")}</span> {t("title")}
        </h1>

        <motion.button
          className="btn"
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("getStarted")}
        </motion.button>
      </motion.div>

      <motion.div
        className="header__image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/photo_2025-12-18_22-57-32.jpg"
          alt={t("imageAlt")}
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
}
