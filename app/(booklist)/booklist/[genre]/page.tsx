import { fetchBookList } from "../../../../lib/api";
import styles from "../../../../styles/detail.module.css";
import BookCard from "../../../../components/BookCard";
import { Suspense } from "react";

interface IParams {
  params: {
    genre: string;
  };
}


export async function generateMetadata({ params }: { params: Promise<IParams['params']> }) {
  const { genre } = await params; 
  return {
    title: `${genre.replace("-", " ")}`,
  };
}

export default async function ListDetail({ params }: { params: Promise<IParams['params']> }) {
  const { genre } = await params;

  const books = await fetchBookList(genre);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        {genre
          .replace(/-/g, " ")
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase())}
      </h3>
      <Suspense fallback={<h2>Loading books...</h2>}>
        <div className={styles.grid}>
          {books.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
