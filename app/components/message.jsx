"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Message() {
  const t = useTranslations("message");

  return (
    <section className="section__container message__container">
      <motion.h2
        className="message__title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>

      <motion.p
        className="message__text"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {t("body")}
      </motion.p>
    </section>
  );
}
