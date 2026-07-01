"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Sidebar.module.css";

const menu = [
  {
    title: "Overview",
    href: "/dashboard",
  },
  {
    title: "AI Consultant",
    href: "/dashboard/consultant",
  },
  {
    title: "Knowledge",
    href: "/dashboard/knowledge",
  },
  {
    title: "Widget",
    href: "/dashboard/widget",
  },
  {
    title: "Leads",
    href: "/dashboard/leads",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        AI Platform
      </div>

      <nav>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={
                  pathname === item.href
                    ? styles.active
                    : styles.link
                }
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}