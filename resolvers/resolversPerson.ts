import axios from 'axios';
import { Person } from '../types/Person';

const API_BASE_URL = 'http://localhost:8081/api/v1';


export const resolversPerson = {
  Query: {
    getPersonById: async (_: any, { id }: { id: string }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/person/${id}`);

        return response.data.content;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
      }
    },
    getPeople: async (_: any, { page, size }: { page: number, size: number}) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/person`, {
            params: {
              page: page,
              size: size 
            }
          });
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch people');
      }
    },
  },
  Mutation: {
    createPerson: async (_: any, { pessoaRequestDTO } : { pessoaRequestDTO : Person } ) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/person`, { pessoaRequestDTO });
        return response.data.content;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create person');
      }
    }
  },
  
};