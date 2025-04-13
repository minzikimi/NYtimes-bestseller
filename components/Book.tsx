import styles from "../styles/card.module.css";


export interface BookCardProps {
  book: {
    book_image: string; 
    title: string;     
    author: string;     
    amazon_product_url: string; 
  };
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className={styles.card}>
      <img src={book.book_image} alt={book.title} className={styles.cover} />
      <h2 className={styles.title}>{book.title}</h2>
      <p className={styles.author}>
       {book.author}
      </p>
    
      <a
        href={book.amazon_product_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.buyButton}
      >
        Buy Now
      </a>
    </div>
  );
}
