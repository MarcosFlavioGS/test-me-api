import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'

import { isProduction } from '@/helper/environment'
import { OpenIaModule } from './module/open-ia/open-ia.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: isProduction
    }),
    OpenIaModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
