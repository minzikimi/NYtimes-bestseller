"use client";

import Link from "next/link";
import styles from "../styles/genre.module.css";

export default function Genre({ list_name_encoded, displayName }: { list_name_encoded: string; displayName: string }) {
  return (
    <li className={styles.listItem}>
      <Link href={`/booklist/${list_name_encoded}`} className={styles.link}>
        {displayName}
      </Link>
    </li>
  );
}
