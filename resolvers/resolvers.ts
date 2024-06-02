import { resolversPerson } from './resolversPerson';
import { resolversProduct } from './resolversProduct';
import { mergeResolvers } from '@graphql-tools/merge';

const nois = {

        T: {
            __resolveType(obj: any, context: any, info: any) {
                if (obj.name) {
                    return 'Person'; // Retornar o nome do tipo diretamente
                  }
                  if (obj.description) {
                    return 'Product'; // Retornar o nome do tipo diretamente
                  }
                  return null;
            },
          },

  };

const resolversArray = [nois ,resolversPerson, resolversProduct];
export const resolvers = mergeResolvers(resolversArray);