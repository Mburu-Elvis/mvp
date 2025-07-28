import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { PublicRegistryResolver } from './resolvers/public-registry.resolver';
import { PublicRegistryService } from './services/public-registry.service';
import gql from 'graphql-tag';

const publicRegistrySchema = gql`
  type RegistryEntity {
    id: ID!
    name: String!
    type: String!
    category: String!
    description: String!
    keyword: String!
    link: String
  }

  extend type Query {
    publicRegistryList(
      page: Int = 1
      limit: Int = 10
      sortBy: String = "name"
      order: String = "asc"
    ): [RegistryEntity!]!

    registryEntityById(id: ID!): RegistryEntity

    registryByType(
      type: String!
      page: Int = 1
      limit: Int = 10
      sortBy: String = "name"
      order: String = "asc"
    ): [RegistryEntity!]!

    registryByCategory(
      category: String!
      page: Int = 1
      limit: Int = 10
      sortBy: String = "name"
      order: String = "asc"
    ): [RegistryEntity!]!

    registryByKeyword(
      keyword: String!
      page: Int = 1
      limit: Int = 10
      sortBy: String = "name"
      order: String = "asc"
    ): [RegistryEntity!]!
  }
`;

@VendurePlugin({
  imports: [PluginCommonModule],
  providers: [PublicRegistryService],
  adminApiExtensions: {
    schema: publicRegistrySchema,
    resolvers: [PublicRegistryResolver],
  },
  shopApiExtensions: {
    schema: publicRegistrySchema,
    resolvers: [PublicRegistryResolver],
  },
})
export class PublicRegistryPlugin {}