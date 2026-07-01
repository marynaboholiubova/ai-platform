import LogoutButton from "@/components/LogoutButton/LogoutButton";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <p className={styles.label}>Dashboard</p>
        <h1 className={styles.title}>AI Consultant Platform</h1>
      </div>

      <LogoutButton />
    </header>
  );
}