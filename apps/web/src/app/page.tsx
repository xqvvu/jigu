import { useTranslations } from "next-intl";

export default async function Home() {
  const t = useTranslations("Home");

  return <div>{t("title")}</div>;
}
