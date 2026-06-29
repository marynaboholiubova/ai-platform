import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <main>
      <h1>Create your account</h1>

      <p>
        Start building your AI website consultant.
      </p>

      <RegisterForm />

      <p>
        Already have an account?{" "}
        <Link href="/login">Login</Link>
      </p>
    </main>
  );
}