const { ApolloServer, gql } = require("apollo-server");
const articles = [
  { title: "title1", body: "body data" },
  { title: "title2", body: "body data" },
  { title: "title3", body: "body data" },
];
const typeDefs = gql`
  type Article {
    title: String!
    body: String!
  }
  #   ----------------------------------------------
  #get all articles
  type Query {
    allArticles(last: Int!): [Article]
  }
  #   ----------------------------------------------
  type Mutation {
    createArticle(title: String!, body: String!): [Article]
    deleteArticle(title: String!): [Article]
  }
`;
const resolvers = {
  Query: {
    allArticles: (_, args, ctx) => {
      const result = articles.slice(-args.last);
      return [...result];
    },
  },
  // ----------------------------------------------
  Mutation: {
    createArticle: (_, args, ctx) => {
      console.log(args);
      articles.push(args);
      return articles;
    },
    //  ----------------------------------------------
    deleteArticle: (_, args, ctx) => {
      console.log(args);
      const result = articles.filter((article) => article.title !== args.title);
      articles = result;
      return result;
    },
  },
};
//  ----------------------------------------------
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//  ----------------------------------------------

server.listen(3001).then(({ url }) => {
  console.log(`Server is Running .. at ${url}`);
});
