import { Field, ID, ObjectType } from 'type-graphql';
import { MenuItem } from './menu-item.model';

@ObjectType()
export class Menu {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => [MenuItem])
  items: MenuItem[];
}
