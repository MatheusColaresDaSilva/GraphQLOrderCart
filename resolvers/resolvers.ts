import { resolversPerson } from './resolversPerson';
import { resolversProduct } from './resolversProduct';
import { mergeResolvers } from '@graphql-tools/merge';

const nois = {

        T: {
            __resolveType(obj: any, context: any, info: any) {
                if (obj.name) {
                    return 'Person'; 
                  }
                  if (obj.description) {
                    return 'Product';
                  }
                  return null;
            },
          },

  };

const resolversArray = [nois ,resolversPerson, resolversProduct];
export const resolvers = mergeResolvers(resolversArray);