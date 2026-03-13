"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Ahmed Hassan",
    image: "images/client1.jpg",
    review:
      "Amazing coaching! I lost 10kg in 3 months thanks to the personalized plan and constant support.",
  },
  {
    name: "Sara Mohamed",
    image: "images/young-fitness-girl-black-sportswear-with-headband-with-serious-face-with-crossed-arms-standing-white-wall.jpg",
    review:
      "The nutrition plan and workouts were perfect for me. I feel stronger and healthier than ever!",
  },
  {
    name: "Omar Khaled",
    image: "images/front-view-man-training-with-kettlebell.jpg",
    review:
      "Very professional coach. Always available and motivating. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <motion.h2
        className="reviews-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Clients Reviews
      </motion.h2>

      <div className="reviews-container">
        {reviews.map((client, index) => (
          <motion.div
            key={index}
            className="review-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={client.image} alt={client.name} />

            <h3>{client.name}</h3>

            <div className="stars">★★★★★</div>

            <p>{client.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}