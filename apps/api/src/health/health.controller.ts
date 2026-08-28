import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  getRoot() {
    return {
      status: 'ok',
      service: 'StyleSeek AI API Gateway',
      endpoints: {
        health: '/health',
        products: '/api/products',
        recommendations: '/api/assistant/recommend',
      },
    };
  }

  @Get('health')
  checkHealth() {
    return {
      status: 'ok',
      service: 'styleseek-ai-api',
      timestamp: new Date().toISOString(),
    };
  }
}
