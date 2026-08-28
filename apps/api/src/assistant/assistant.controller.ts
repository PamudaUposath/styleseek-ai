import {
  Controller,
  Post,
  Body,
  Req,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AssistantService } from './assistant.service';
import { RecommendRequestDto } from './dto/recommend-request.dto';
import { RecommendResponse } from '@styleseek/shared';
import { RequestWithId } from '../common/middleware/logger.middleware';

@Controller('api/assistant')
export class AssistantController {
  constructor(private readonly assistantService: AssistantService) {}

  @Post('recommend')
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async recommend(
    @Body() dto: RecommendRequestDto,
    @Req() req: RequestWithId
  ): Promise<RecommendResponse> {
    const requestId = req.id || 'req-' + Date.now();
    return this.assistantService.processRequest(dto, requestId);
  }
}
