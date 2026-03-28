"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="footer-logo">{t("brand")}</h2>
          <p>{t("tagline")}</p>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3>{t("quickLinks")}</h3>
          <ul>
            <li>
              <Link href="/">{t("links.home")}</Link>
            </li>
            <li>
              <Link href="/service">{t("links.services")}</Link>
            </li>
            <li>
              <Link href="/prices">{t("links.pricing")}</Link>
            </li>
            <li>
              <Link href="/">{t("links.reviews")}</Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>{t("servicesTitle")}</h3>
          <ul>
            {["0", "1", "2", "3"].map((key) => (
              <li key={key}>{t(`servicesList.${key}`)}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="footer-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3>{t("follow")}</h3>
          <div className="socials">
            <a href="#">{t("social.instagram")}</a>
            <a href="#">{t("social.facebook")}</a>
            <a href="#">{t("social.whatsapp")}</a>
            <a href="#">{t("social.tiktok")}</a>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">{t("copyright")}</div>
    </footer>
  );
}
