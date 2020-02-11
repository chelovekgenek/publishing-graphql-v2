import { Injectable, HttpService } from '@nestjs/common';
import { MenuResultModel } from './models';

@Injectable()
export class RtlNieuwsFacade {
  constructor(private readonly httpService: HttpService) {}

  async getMenuById(menuId: string): Promise<MenuResultModel> {
    const { data } = await this.httpService
      .get<MenuResultModel>(`/entity/menu/${menuId}?_format=json`)
      .toPromise();
    return data;
  }
}
