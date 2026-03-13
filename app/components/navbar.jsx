"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
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
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
        <span className={isOpen ? "nav__toggle-line open" : "nav__toggle-line"} />
      </button>

      <ul className={isOpen ? "nav__links nav__links--open" : "nav__links"}>
        <li className="link" onClick={closeMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/program">Program</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/service">Service</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/about">About</Link>
        </li>
        <li className="link" onClick={closeMenu}>
          <Link href="/prices">Prices</Link>
        </li>
     
      </ul>

      <button className="btn nav__cta-desktop">Join Now</button>
    </nav>
  );
}
