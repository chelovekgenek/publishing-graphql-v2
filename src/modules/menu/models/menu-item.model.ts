import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class MenuItem {
  @Field()
  title: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  icon?: string;

  @Field(() => [MenuItem])
  items: MenuItem[];
}
