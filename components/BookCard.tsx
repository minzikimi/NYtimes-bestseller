"use client"

import React, { useState } from 'react';
import styles from "../styles/card.module.css";

export interface BookCardProps {
  book: {
    book_image: string;
    title: string;
    author: string;
    buy_links: { name: string; url: string }[]; // Array of purchase links
  };
}

export default function BookCard({ book }: BookCardProps) {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={styles.card}>
      <img src={book.book_image} alt={book.title} className={styles.cover} />
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>{book.author}</p>
      <button onClick={toggleLinks} className={styles.buyButton}>
        {showLinks ? "Hide Links" : "Wanna buy?"}
      </button>
      {showLinks && (
        <div className={styles.linksContainer}>
          {book.buy_links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
