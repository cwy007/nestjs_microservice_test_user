import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('sum')
  // @MessagePattern({ cmd: 'sum' })
  sum(numArr: number[]): number {
    console.log('Received numbers:', numArr);
    return numArr.reduce((a, b) => a + b, 0);
  }

  @EventPattern('log')
  logEvent(data: any) {
    console.log('Received log event:', data);
  }
}
