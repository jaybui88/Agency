"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "./site-data";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="topbar">
      <Link href="/" className="brand brand-link" aria-label="Anh Duong Security">
        <Image
          src="/brand/logo-mark.svg"
          alt="Logo Anh Duong Security"
          width={48}
          height={48}
          className="brand-mark-image"
          priority
        />
        <div>
          <p className="brand-name">Anh Duong Security</p>
          <p className="brand-tag">Discipline. Reliability. Response.</p>
        </div>
      </Link>

      <button
        type="button"
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        aria-controls="site-navigation"
        aria-label={isMenuOpen ? "Dong menu" : "Mo menu"}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-shell${isMenuOpen ? " is-open" : ""}`}>
        <nav className="nav" id="site-navigation">
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname?.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link is-active" : "nav-link"}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="button button-primary button-header" href="/lien-he">
          Yêu cầu báo giá
        </Link>
      </div>
    </header>
  );
}
