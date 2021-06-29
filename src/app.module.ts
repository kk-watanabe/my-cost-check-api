import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { CostModule } from './cost/cost.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [],
      isGlobal: true,
      envFilePath: ['.env.local'],
    }),
    TestModule,
    CostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
