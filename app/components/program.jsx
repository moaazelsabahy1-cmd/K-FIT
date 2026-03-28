"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const DAY_KEYS = ["day1", "day2", "day3"];

export default function WorkoutPlan() {
  const t = useTranslations("program");

  const days = DAY_KEYS.map((key) => ({
    title: t(`${key}.title`),
    exercises: t.raw(`${key}.exercises`),
  }));

  return (
    <section className="section__container workout__container">
      <motion.h2
        className="section__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>

      <div className="workout__grid">
        {days.map((day, index) => (
          <motion.div
            key={index}
            className="workout__card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{day.title}</h3>

            <ul>
              {day.exercises.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>

            <button type="button" className="btn">
              {t("startWorkout")}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
