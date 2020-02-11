import { Module } from '@nestjs/common';

import { RtlNieuwsModule } from 'modules/rtlnieuws';

import { MenuService } from './menu.service';
import { MenuResolver } from './menu.resolver';

@Module({
  imports: [RtlNieuwsModule],
  providers: [MenuService, MenuResolver],
})
export class MenuModule {}
