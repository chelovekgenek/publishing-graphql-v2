import { MinLength } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';

@ArgsType()
export class MenuByIdArgs {
  @Field()
  @MinLength(5)
  menuId: string;
}
