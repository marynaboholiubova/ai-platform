"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/app/actions/auth/login";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);

    try {
      await login({
        email,
        password,
      });

      router.replace("/dashboard");
      router.refresh();
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Login failed.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        placeholder="Your password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
}