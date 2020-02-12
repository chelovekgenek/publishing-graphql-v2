import { Injectable } from '@nestjs/common';

import {
  RtlNieuwsService,
  MenuResultModel,
  MenuItemResultModel,
} from 'shared/facades';

import { Menu, MenuItem } from './models';

@Injectable()
export class MenuService {
  constructor(private readonly rtlnieuwsService: RtlNieuwsService) {}

  async getNavigationById(menuId: string): Promise<Menu> {
    const menu = await this.rtlnieuwsService.getMenuById(menuId);
    return this.reduceMenu(menu);
  }

  private reduceMenu(menu: MenuResultModel): Menu {
    return {
      name: menu.label,
      id: menu.id,
      items: menu.tree.map(item => this.reduceMenuItem(item)),
    };
  }

  private reduceMenuItem(menuitem: MenuItemResultModel): MenuItem {
    return {
      title: menuitem.title,
      url: menuitem.url,
      items: menuitem.children.map(item => this.reduceMenuItem(item)),
    };
  }
}
