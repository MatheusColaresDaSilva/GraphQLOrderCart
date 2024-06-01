import { gql } from 'apollo-server';

export const typeDefs  = gql`
  type Query {
    getProductById(id: ID!): Product
    getProducts(page: Int, size: Int): DataResponse
  }

  type Mutation {
    createProduct(description: String!): Product
  }

  type DataResponse {
    content: Content 
    erros: [ErroResponse]
  }

  type ErroResponse {
    message: String
    code: Int
  }

  type Content {
    content: [Product]
    totalElements: Int
  }

  type Product {
    id: ID
    description: String
  }
`;