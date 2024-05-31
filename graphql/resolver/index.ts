import { createAuthor } from "./mutate/author";
import { getAllAuthors, authorQueryById } from "./query/author";
import { getAllBooks, bookQueryById } from "./query/book";
import { createAuthor as newAuthor } from "@/graphql/resolver/mutate/author";
import { createBook as newBook } from "@/graphql/resolver/mutate/book";

export const resolvers = {
  Query: {
    author: getAllAuthors,
    book: getAllBooks,
    authorById(parent: any, args: { id: string }) {
      return authorQueryById(args.id);
    },
    bookById(parent: any, args: { id: string }) {
      return bookQueryById(args.id);
    },
  },

  Mutation: {
    async createAuthor(
      _: any,
      { email, name }: { email: string; name: string }
    ) {
      return await newAuthor(name, email);
    },

    async createBook(_: any, args: { title: string; authorId: string }) {
      const { authorId, title } = args;
      return await newBook(title, authorId);
    },
  },
};
