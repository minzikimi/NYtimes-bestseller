import { BASE_URL } from "../constant";

export async function fetchGenre() {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch genres: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}

export async function fetchBookList (){
    
}