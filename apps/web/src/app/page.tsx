import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return <div>{t("Home.title")}</div>;
}
