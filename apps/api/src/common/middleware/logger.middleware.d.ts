import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export interface RequestWithId extends Request {
    id?: string;
}
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly logger;
    use(req: RequestWithId, res: Response, next: NextFunction): void;
}
