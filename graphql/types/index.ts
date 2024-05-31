import gql from "graphql-tag";

export const typeDefs = gql`
  type Author {
    id: String
    name: String
    email: String
    book: [Book]
  }

  type Book {
    id: String
    title: String
    author: Author
  }

  type Query {
    hello: String
    author: [Author]
    book: [Book]
    authorById(id: ID!): Author
    bookById(id: ID!): Book
  }

  type Mutation {
    createAuthor(name: String, email: String): Author
    createBook(title: String, authorId: String): Book
  }
`;
