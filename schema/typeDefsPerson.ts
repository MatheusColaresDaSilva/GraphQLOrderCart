import { gql } from 'apollo-server';

export const typeDefsPerson  = gql`
 
  type Query {
    getPersonById(id: ID!): Person
    getPeople(page: Int, size: Int): DataResponse
  }

  type Person implements T{
    id: ID!
    name: String
    sin: String
    birthDate: String
  }
`;