import { type } from './typesResponse';
import { typeDefsPerson } from './typeDefsPerson';
import { typeDefsProduct } from './typeDefsProduct';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typeDefsArray = [type, typeDefsPerson, typeDefsProduct];
export const typeDefs = mergeTypeDefs(typeDefsArray);