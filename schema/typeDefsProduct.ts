import { gql } from 'apollo-server';

export const typeDefsProduct  = gql`
  type Query {
    getProductById(id: ID!): Product
    getProducts(page: Int, size: Int): DataResponse
  }

  type Mutation {
    createProduct(description: String!): Product
  }

  type Product implements T{
    id: ID!
    description: String
  }
`;