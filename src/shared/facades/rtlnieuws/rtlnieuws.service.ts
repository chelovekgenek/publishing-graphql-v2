import { Injectable } from '@nestjs/common';
import { transformAndValidate } from 'class-transformer-validator';

import { RtlNieuwsFacade } from './rtlnieuws.facade';
import { MenuResultModel } from './models';

@Injectable()
export class RtlNieuwsService {
  constructor(private readonly rtlnieuwsFacade: RtlNieuwsFacade) {}

  async getMenuById(id: string): Promise<MenuResultModel> {
    const result = await this.rtlnieuwsFacade.getMenuById(id);
    await transformAndValidate(MenuResultModel, result);
    return result;
  }
}
