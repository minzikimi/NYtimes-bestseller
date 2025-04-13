import { fetchBookList } from "../../../../lib/api";
import styles from "../../../../styles/detail.module.css";
import BookCard from "../../../../components/Book";
import { Suspense } from "react";

interface IParams {
  params: {
    genre: string;
  };
}


export async function generateMetadata({ params }: IParams) {
  const { genre } = params;

  return {
    title: `${genre}`,
  };
}

export default async function ListDetail({ params }: IParams) {
  const { genre } = params;

  const books = await fetchBookList(genre);

  return (
    <div className={styles.container}>
      <h5 className={styles.heading}>{genre.replace("-", " ")}</h5>
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
