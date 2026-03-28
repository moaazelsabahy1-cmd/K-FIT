"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const SERVICE_KEYS = ["0", "1", "2", "3"];

export default function Services() {
  const t = useTranslations("services");

  return (
    <section className="services">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h2>

      <div className="services-container">
        {SERVICE_KEYS.map((key, index) => (
          <motion.div
            className="service-card"
            key={key}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{t(`items.${key}.title`)}</h3>
            <p>{t(`items.${key}.desc`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
