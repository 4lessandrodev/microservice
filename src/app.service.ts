import { Injectable } from '@nestjs/common';
import { ApiCheck } from '@shared/doc-types';

@Injectable()
export class AppService {
  healthCheck(): ApiCheck {
    return { status: 'ok', date: new Date() };
  }
}
