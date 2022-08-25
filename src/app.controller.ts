import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ApiCheck } from '@shared/doc-types';
import { AppService } from './app.service';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healthCheck')
  @ApiOkResponse({ type: ApiCheck })
  healthCheck(): ApiCheck {
    return this.appService.healthCheck();
  }
}
