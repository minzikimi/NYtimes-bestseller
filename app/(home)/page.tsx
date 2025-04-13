import { fetchGenre } from "../../lib/api";
import Genre from "../../components/Genre";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export default async function HomePage() {
  const data = await fetchGenre();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New York Times Bestsellers</h1>
      <ul className={styles.list}>
        {data.results.map((list) => (
          <Genre key={list.list_name_encoded} list_name_encoded={list.list_name_encoded} displayName={list.display_name} />
        ))}
      </ul>
    </div>
  );
}
