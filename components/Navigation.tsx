"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={`${styles.listItem} ${path === "/" ? styles.box1 : ""}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.listItem} ${path === "/about" ? styles.box1 : ""}`}>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
