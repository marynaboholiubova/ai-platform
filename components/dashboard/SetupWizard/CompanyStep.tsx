"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";


import { createCompany } from "@/app/actions/companies/createCompany";

type CompanyStepProps = {
  onComplete: () => void;
};

export default function CompanyStep({ onComplete }: CompanyStepProps) {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [language, setLanguage] = useState("nl");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      await createCompany({
        name,
        website,
        industry,
        language,
      });

      onComplete();
    } catch (error) {
      console.error(error);
      alert("Company setup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tell us about your company</h2>

      <Input
        label="Company name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <Input
        label="Website"
        placeholder="https://example.com"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />

      <Input
        label="Industry"
        placeholder="HVAC, restaurant, beauty..."
        value={industry}
        onChange={(event) => setIndustry(event.target.value)}
      />

      <label>
        Default language
        <select value={language} onChange={(event) => setLanguage(event.target.value)}>
     <option value="nl">🇳🇱 Nederlands</option>
  <option value="en">🇬🇧 English</option>
  <option value="fr">🇫🇷 Français</option>
  <option value="de">🇩🇪 Deutsch</option>
  <option value="uk">🇺🇦 Українська</option>
  <option value="it">🇮🇹 Italiano</option>
  <option value="es">🇪🇸 Español</option>
  <option value="pt">🇵🇹 Português</option>
  <option value="sv">🇸🇪 Svenska</option>
  <option value="ro">🇷🇴 Română</option>
  <option value="cs">🇨🇿 Čeština</option>
  <option value="pl">🇵🇱 Polski</option>
  <option value="tr">🇹🇷 Türkçe</option>
  <option value="ru">🇷🇺 Русский</option>
        </select>
      </label>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Continue"}
      </Button>
    </form>
  );
}