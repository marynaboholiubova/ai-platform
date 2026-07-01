"use client";

import { useState } from "react";
import CompanyStep from "./CompanyStep";

export default function SetupWizard() {
  const [step, setStep] = useState(0);

  if (step === 1) {
    return <CompanyStep onComplete={() => setStep(2)} />;
  }

  if (step === 2) {
    return (
      <section>
        <h1>Dashboard</h1>
        <p>Your company has been created successfully.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Welcome to AI Consultant Platform</h1>
      <p>Let&apos;s create your AI Consultant.</p>

      <button onClick={() => setStep(1)}>Get Started</button>
    </section>
  );
}