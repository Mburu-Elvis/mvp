import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PublicRegistryService } from '../services/public-registry.service';

@Resolver('RegistryEntity')
export class PublicRegistryResolver {
  constructor(private readonly registryService: PublicRegistryService) {}

  @Query('publicRegistryList')
  async getAll(
    @Args('page', { type: () => Int }) page = 1,
    @Args('limit', { type: () => Int }) limit = 10,
    @Args('sortBy') sortBy = 'name',
    @Args('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.registryService.getAll(
      {
        skip: (page - 1) * limit,
        take: limit,
      },
      {
        field: sortBy,
        order,
      },
    );
  }

  @Query('registryEntityById')
  async getById(@Args('id') id: string) {
    return this.registryService.getById(id);
  }

  @Query('registryByType')
  async getByType(
    @Args('type') type: string,
    @Args('page', { type: () => Int }) page = 1,
    @Args('limit', { type: () => Int }) limit = 10,
    @Args('sortBy') sortBy = 'name',
    @Args('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.registryService.getByType(
      type,
      {
        skip: (page - 1) * limit,
        take: limit,
      },
      {
        field: sortBy,
        order,
      },
    );
  }

  @Query('registryByCategory')
  async getByCategory(
    @Args('category') category: string,
    @Args('page', { type: () => Int }) page = 1,
    @Args('limit', { type: () => Int }) limit = 10,
    @Args('sortBy') sortBy = 'name',
    @Args('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.registryService.getByCategory(
      category,
      {
        skip: (page - 1) * limit,
        take: limit,
      },
      {
        field: sortBy,
        order,
      },
    );
  }

  @Query('registryByKeyword')
  async getByKeyword(
    @Args('keyword') keyword: string,
    @Args('page', { type: () => Int }) page = 1,
    @Args('limit', { type: () => Int }) limit = 10,
    @Args('sortBy') sortBy = 'name',
    @Args('order') order: 'asc' | 'desc' = 'asc',
  ) {
    return this.registryService.getByKeyword(
      keyword,
      {
        skip: (page - 1) * limit,
        take: limit,
      },
      {
        field: sortBy,
        order,
      },
    );
  }
}
