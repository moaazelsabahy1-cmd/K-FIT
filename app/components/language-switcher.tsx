"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="lang-switcher">
      <label htmlFor="lang-select" className="sr-only">
        {t("language")}
      </label>
      <select
        id="lang-select"
        className="lang-switcher__select"
        value={locale}
        onChange={(e) => {
          const next = e.target.value;
          router.replace(pathname, { locale: next });
        }}
        aria-label={t("language")}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === "en" ? "English" : "العربية"}
          </option>
        ))}
      </select>
    </div>
  );
}
