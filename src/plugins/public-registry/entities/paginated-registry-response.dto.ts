// dto/paginated-registry-response.dto.ts
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RegistryEntity } from './registry-entity';

@ObjectType()
export class PaginatedRegistryResponse {
  @Field(() => [RegistryEntity])
  items: RegistryEntity[];

  @Field(() => Int)
  totalItems: number;

  @Field(() => Int)
  totalPages: number;

  @Field(() => Int)
  currentPage: number;
}
