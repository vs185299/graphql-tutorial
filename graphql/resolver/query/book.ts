import { Author } from "./author";
import fs from "fs/promises";

export interface Book {
  id: string;
  author: Author;
  title: string;
}

export const getAllBooks = async () => {
  // data fetch from db

  const bookData = JSON.parse(
    await fs.readFile("data/book.json", "utf-8")
  ) as Book[];

  const data = bookData;

  return data;
};

export const bookQueryById = async (id: string) => {
  const data = await getAllBooks();

  const book = data.find((el) => el.id == id);

  return book;
};
