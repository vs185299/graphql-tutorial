import { getAllAuthors } from "../query/author";
import { Book } from "../query/book";
import fs from "fs/promises";

export const createAuthor = async (name: string, email: string) => {
  const author = {
    id: Date.now().toString(),
    name,
    email,
    book: [] as Book[],
  };

  const authors = await getAllAuthors();

  authors.push(author);

  await fs.writeFile("data/author.json", JSON.stringify(authors), "utf-8");

  return author;
};

export const addBookToAuthor = async (authorId: string, book: Book) => {
  const authors = await getAllAuthors();
  const author = authors.find((el) => el.id == authorId)!;
  author.book.push(book);

  await fs.writeFile("data/author.json", JSON.stringify(authors), "utf-8");
};
