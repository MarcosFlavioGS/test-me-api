import { Module } from '@nestjs/common'

import { OpenIaController } from './controller/.controller'

@Module({
  imports: [],
  providers: [],
  controllers: [OpenIaController]
})
export class OpenIaModule {}
