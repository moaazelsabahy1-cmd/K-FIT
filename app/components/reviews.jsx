"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const REVIEW_KEYS = ["0", "1", "2"];
const REVIEW_IMAGES = [
  "images/client1.jpg",
  "images/young-fitness-girl-black-sportswear-with-headband-with-serious-face-with-crossed-arms-standing-white-wall.jpg",
  "images/front-view-man-training-with-kettlebell.jpg",
];

export default function Reviews() {
  const t = useTranslations("reviews");

  return (
    <section className="reviews">
      <motion.h2
        className="reviews-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("title")}
      </motion.h2>

      <div className="reviews-container">
        {REVIEW_KEYS.map((key, index) => (
          <motion.div
            key={key}
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={`/${REVIEW_IMAGES[index]}`} alt={t(`items.${key}.name`)} />

            <h3>{t(`items.${key}.name`)}</h3>

            <div className="stars">★★★★★</div>

            <p>{t(`items.${key}.text`)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
