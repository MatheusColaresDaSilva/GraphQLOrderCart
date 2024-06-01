import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1';

export const resolvers = {
  Query: {
    getProductById: async (_: any, { id }: { id: string }) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/item/${id}`);
        return response.data.content;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
      }
    },
    getProducts: async (_: any, { page, size }: { page: number, size: number}) => {
      try {
        const response = await axios.get(`${API_BASE_URL}/item`, {
            params: {
              page: page,
              size: size 
            }
          });
        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products');
      }
    },
  },
  Mutation: {
    createProduct: async (_: any, { description }: { description: string }) => {
      try {
        const response = await axios.post(`${API_BASE_URL}/item`, { description });
        return response.data.content;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to create product');
      }
    }
  },
};