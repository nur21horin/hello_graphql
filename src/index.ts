import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
type Product{
    id:ID!
    name:String
    image:String
    description:String
    price:Float
    quantity:Int
    onStock:Boolean
    categoryId:ID
}

  type Query {
  products:[Product]
  }
`;

const resolvers = {
  Query: {},
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
