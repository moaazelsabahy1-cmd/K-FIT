"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ClassSection() {
  const t = useTranslations("content");

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
          alt={t("imageAlt")}
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
        <h2 className="section__header">{t("title")}</h2>

        <p>{t("body")}</p>

        <motion.button
          className="btn"
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {t("joinNow")}
        </motion.button>
      </motion.div>
    </section>
  );
}
