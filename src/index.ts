import { ApolloServer } from 'apollo-server';
import { typeDefs  } from '../schema/schema';
import { resolvers } from '../resolvers/resolvers';


// Crie o servidor Apollo
const server = new ApolloServer({ typeDefs , resolvers });

// Inicie o servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});