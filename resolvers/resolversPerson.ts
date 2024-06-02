import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/v1';

const __type = "Person";

export const resolversPerson = {
  Query: {
    getPersonById: async (_: any, { id }: { id: string }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/pessoa/${id}`);

        return response.data.content;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
      }
    },
    getPeople: async (_: any, { page, size }: { page: number, size: number}) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/pessoa`, {
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
};