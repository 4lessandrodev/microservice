import { Injectable } from '@nestjs/common';
import { ApiCheck } from '@shared/doc-types';

@Injectable()
export class AppService {
  private status: ApiCheck = {} as ApiCheck;

  ping(): ApiCheck {
    this.status = { status: 'ok', date: new Date() };
    return this.status;
  }

  pong(): ApiCheck {
    return this.status;
  }
}
