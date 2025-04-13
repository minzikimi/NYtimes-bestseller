import { BASE_URL } from "../constant";

export async function fetchGenre() {
    const res = await fetch(`${BASE_URL}/lists`);
    if (!res.ok) {
      throw new Error(`Failed to fetch genres: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  }
  
  export async function fetchBookList(genre: string) {
    const res = await fetch(`${BASE_URL}/list?name=${genre}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch books for genre "${genre}": ${res.statusText}`);
    }
    const data = await res.json();
    return data.results.books;  
  }