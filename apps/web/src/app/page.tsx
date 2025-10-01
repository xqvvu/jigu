import { useLocale, useTranslations } from "next-intl";
import Icon from "@/components/icon";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeSwitcher from "@/components/theme-switcher";

export default function Home() {
  const t = useTranslations("Home");
  const locale = useLocale();

  return (
    <div>
      <div>{t("title")}</div>
      <div className="font-semibold text-emerald-500">{locale}</div>
      <LocaleSwitcher />
      <Icon className="icon-[solar--airbuds-charge-linear]" />
      <ThemeSwitcher />
    </div>
  );
}
