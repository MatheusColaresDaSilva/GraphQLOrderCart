import { gql } from 'apollo-server';

export const typeDefsPerson  = gql`
 
  type Query {
    getPersonById(id: ID!): Person
    getPeople(page: Int, size: Int): DataResponse
  }

  type Mutation {
    createPerson(pessoaRequestDTO: PersonInput!): Person!
  }

  type Person implements T{
    id: ID!
    name: String
    sin: String
    birthDate: String
    contacts: [Contact]
  }

  type Contact {
    id: ID!
    name: String
    phone: String
    email: String
  }

  input PersonInput {
    name: String
    sin: String
    birthDate: String
    contacts: [ContactInput]
  }

  input ContactInput {
    name: String
    phone: String
    email: String
  }
`;