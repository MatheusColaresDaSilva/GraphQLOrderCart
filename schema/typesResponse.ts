import { gql } from "apollo-server";

export const type  = gql`

  type DataResponse {
    content: Content 
    erros: [ErroResponse]
  }

  type ErroResponse {
    message: String
    code: Int
  }

  type Content {
    content: [T]
    totalElements: Int
  }

  interface T {
    id: ID!
  }
`;