import fs from "fs/promises";
import { Book } from "./book";

export interface Author {
  id: string;
  name: string;
  email: string;
  book: Book[];
}

export const getAllAuthors = async () => {
  const authorData = JSON.parse(
    await fs.readFile("data/author.json", "utf-8")
  ) as Author[];
  //data base call

  const data = authorData;

  return data;
};

export const authorQueryById = async (id: string) => {
  const data = await getAllAuthors();

  const author = data.find((el) => id == el.id);

  return author;
};
