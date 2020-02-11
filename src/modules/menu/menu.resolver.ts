import { Query, Resolver, Args } from '@nestjs/graphql';

import { Menu } from './models';
import { MenuByIdArgs } from './dtos';
import { MenuService } from './menu.service';

@Resolver(() => Menu)
export class MenuResolver {
  constructor(private readonly menuService: MenuService) {}

  @Query(() => Menu)
  async mainNavigation(): Promise<Menu> {
    return this.menuService.getNavigationById('rtl--site-menu');
  }

  @Query(() => Menu)
  async footerNavigation(): Promise<Menu> {
    return this.menuService.getNavigationById('rtl--footer-menu');
  }

  @Query(() => Menu)
  async getNavigationById(@Args() { menuId }: MenuByIdArgs): Promise<Menu> {
    return this.menuService.getNavigationById(menuId);
  }
}
