import { BASE_URL } from "../../constant";
import styles from "../../styles/home.module.css";
import { fetchGenre } from "../../lib/api";

export default async function HomePage() {
  // Wait for the data to be fetched
  const data = await fetchGenre();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New York Times Bestsellers</h1>
      <ul className={styles.list}>
        {data.results.map((list) => (
          <li key={list.list_name_encoded} className={styles.listItem}>
            {list.display_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
