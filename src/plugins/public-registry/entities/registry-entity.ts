import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class RegistryEntity {
  @Field()
  id: string;

  @Field()
  name: string

  @Field()
  type: string;

  @Field()
  category: string;

  @Field()
  keyword: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  link?: string;
}
