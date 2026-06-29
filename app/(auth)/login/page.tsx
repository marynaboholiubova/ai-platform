import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>

      <p>Login to manage your AI website consultant.</p>

      <LoginForm />

      <p>
        Don&apos;t have an account?{" "}
        <Link href="/register">Create account</Link>
      </p>
    </main>
  );
}