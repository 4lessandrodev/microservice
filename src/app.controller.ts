import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { Ctx, RmqContext } from '@nestjs/microservices';
import { ApiCheck } from '@shared/doc-types';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('ping')
  async ping(@Ctx() ctx: RmqContext): Promise<ApiCheck> {
    const channel = ctx.getChannelRef();
    const msg = ctx.getMessage();
    this.appService.ping();

    // informar que a mensagem precisa ser processada novamente.
    return channel.ack(msg);
  }

  @MessagePattern('pong')
  async pong(@Ctx() ctx: RmqContext): Promise<ApiCheck> {
    const data = this.appService.pong();

    const channel = ctx.getChannelRef();
    const msg = ctx.getMessage();

    // informar para rabbitmq que a mensagem foi processada com sucesso
    channel.ack(msg);
    return data;
  }
}
