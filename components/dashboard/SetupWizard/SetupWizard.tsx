"use client";

import { useState } from "react";

import CompanyStep from "./CompanyStep";
import ConsultantStep from "./ConsultantStep";

export default function SetupWizard() {
  const [step, setStep] = useState(0);

  switch (step) {
    case 1:
      return (
        <CompanyStep
          onComplete={() => setStep(2)}
        />
      );

    case 2:
      return <ConsultantStep />;

    default:
      return (
        <section>
          <h1>👋 Welcome to AI Consultant Platform</h1>

          <p>Let's create your AI Consultant.</p>

          <button onClick={() => setStep(1)}>
            Get Started
          </button>
        </section>
      );
  }
}