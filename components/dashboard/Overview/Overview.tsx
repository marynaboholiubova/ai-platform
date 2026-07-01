import { useTranslations } from "@/hooks/useTranslations";

type OverviewProps = {
  language: string;
};

export default function Overview({ language }: OverviewProps) {
  const t = useTranslations(language);

  return (
    <section>
      <h1>{t.dashboard.title}</h1>
      <p>{t.dashboard.subtitle}</p>

      <div>
        <h3>{t.dashboard.aiStatus}</h3>
        <p>Ready</p>
      </div>

      <div>
        <h3>{t.dashboard.knowledge}</h3>
        <p>0 files</p>
      </div>

      <div>
        <h3>{t.dashboard.widget}</h3>
        <p>Not installed</p>
      </div>
    </section>
  );
}