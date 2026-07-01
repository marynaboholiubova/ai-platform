import Header from "../Header";
import Sidebar from "../Sidebar";

import styles from "./DashboardLayout.module.css";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}