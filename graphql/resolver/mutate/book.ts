import { getAllAuthors } from "../query/author";
import { getAllBooks } from "../query/book";
import fs from "fs/promises";
import { addBookToAuthor } from "./author";

export const createBook = async (title: string, authorId: string) => {
  const authors = getAllAuthors();

  const book = {
    id: Date.now().toString(),
    title,
    author: (await authors).find((el) => el.id == authorId)!,
  };

  const books = await getAllBooks();

  books.push(book);

  await fs.writeFile("data/book.json", JSON.stringify(books), "utf-8");

  addBookToAuthor(authorId, book);

  return book;
};
