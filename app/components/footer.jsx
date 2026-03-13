"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-logo">COACH KARIM</h2>
          <p>
            Transform your body and lifestyle with professional coaching,
            personalized workout plans, and constant support.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Reviews</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Services</h3>
          <ul>
            <li>Online Coaching</li>
            <li>Workout Programs</li>
            <li>Nutrition Plans</li>
            <li>Progress Tracking</li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Follow Me</h3>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
            <a href="#">TikTok</a>
          </div>
        </motion.div>

      </div>

      <div className="footer-bottom">
        © 2026 Coach Karim. All rights reserved.
      </div>

    </footer>
  );
}