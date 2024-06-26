import * as Joi from 'joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        API_PORT: Joi.number().default(3000),
        JWT_ACCESS_TOKEN_SECRET: Joi.required(),
        JWT_REFRESH_TOKEN_SECRET: Joi.required(),
        JWT_ACCESS_TOKEN_EXPIRATION: Joi.string().default('10m'),
        JWT_REFRESH_TOKEN_EXPIRATION: Joi.string().default('7d'),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
