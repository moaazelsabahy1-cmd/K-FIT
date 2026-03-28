"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./language-switcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <nav className={isOpen ? "nav nav--open" : "nav"}>
      <div className="nav__logo">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/images/image.png"
            alt="logo"
            width={120}
            height={40}
          />
        </Link>
      </div>

      <button
        className="nav__toggle"
        type="button"
        aria-label={t("toggleNav")}
        onClick={toggleMenu}
      >
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
      </button>

      <ul className={isOpen ? "nav__links nav__links--open" : "nav__links"}>
        <li className="link" onClick={closeMenu}>
          <Link href="/">{t("home")}</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/program">{t("program")}</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/service">{t("service")}</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/about">{t("about")}</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/prices">{t("prices")}</Link>
        </li>
        <li className="link nav__lang-item">
          <LanguageSwitcher />
        </li>
      </ul>

      <button type="button" className="btn nav__cta-desktop">
        {t("joinNow")}
      </button>
    </nav>
  );
}
