import { AssistantService } from './assistant.service';
import { RecommendRequestDto } from './dto/recommend-request.dto';
import { RecommendResponse } from '@styleseek/shared';
import { RequestWithId } from '../common/middleware/logger.middleware';
export declare class AssistantController {
    private readonly assistantService;
    constructor(assistantService: AssistantService);
    recommend(dto: RecommendRequestDto, req: RequestWithId): Promise<RecommendResponse>;
}
