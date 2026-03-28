"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PLAN_KEYS = ["0", "1", "2"];

export default function Pricing() {
  const t = useTranslations("prices");

  return (
    <section className="price__container">
      <motion.h2
        className="section__header"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h2>

      <motion.p
        className="section__subheader"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t("subtitle")}
      </motion.p>

      <div className="price__grid">
        {PLAN_KEYS.map((key, index) => {
          const features = t.raw(`plans.${key}.features`);
          return (
            <motion.div
              className={`price__card ${index === 1 ? "active" : ""}`}
              key={key}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="price__card__content">
                <h4>{t(`plans.${key}.title`)}</h4>
                <h3>{t(`plans.${key}.price`)}</h3>

                {Array.isArray(features) &&
                  features.map((feature, i) => (
                    <p key={i}>✔ {feature}</p>
                  ))}
              </div>

              <button type="button" className="price__btn">
                {t("joinNow")}
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
