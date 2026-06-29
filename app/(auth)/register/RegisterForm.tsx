"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signUp } from "@/services/auth/signUp";

import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      await signUp({
        companyName,
        email,
        password,
      });

      alert("Account created successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Company name"
        type="text"
        placeholder="Cool & Heat Expert"
        value={companyName}
        onChange={(event) => setCompanyName(event.target.value)}
        required
      />

      <Input
        label="Email address"
        type="email"
        placeholder="info@company.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <Input
        label="Password"
        type="password"
        placeholder="Create a password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        minLength={8}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  );
}