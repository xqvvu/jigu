"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";
import Icon from "@/components/icon";
import type { Locale } from "@/i18n/locales";
import { localeIcon, locales } from "@/i18n/locales";

export default function LocaleSwitcher() {
  const router = useRouter();
  const t = useTranslations("locale");
  const locale = useLocale() as Locale;

  const sortedLocales = useMemo(() => {
    const index = locales.indexOf(locale);
    if (index === -1) return [...locales];
    const unsorted = [...locales];
    const [current] = unsorted.splice(index, 1);
    return [current, ...unsorted];
  }, [locale]);

  const handleSelectLocale = (_locale: Locale) => {
    if (locale === _locale) return;
    cookieStore.set("locale", _locale);
    router.refresh();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          startContent={
            <Icon className="icon-[carbon--ibm-watson-language-translator]" />
          }
          variant="bordered"
        >
          {t(locale)}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        disallowEmptySelection
        onAction={(locale) => handleSelectLocale(locale as Locale)}
      >
        {sortedLocales.map((locale) => (
          <DropdownItem
            key={locale}
            startContent={<Icon className={localeIcon(locale)} />}
          >
            {t(locale)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
