import { Type } from 'class-transformer';
import { IsString, IsArray, ValidateNested, IsOptional } from 'class-validator';

export class MenuResultModel {
  @IsString()
  label: string;

  @IsString()
  id: string;

  @Type(() => MenuItemResultModel)
  @ValidateNested({ each: true })
  tree: MenuItemResultModel[];
}

export class MenuItemResultModel {
  @IsString()
  title: string;

  @IsString()
  url: string;

  @Type(() => MenuItemResultModel)
  @ValidateNested({ each: true })
  @IsOptional()
  @IsArray()
  children: MenuItemResultModel[];
}
