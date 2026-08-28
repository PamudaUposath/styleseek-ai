import { Module } from '@nestjs/common';
import { AssistantController } from './assistant.controller';
import { AssistantService } from './assistant.service';
import { DeterministicFilterService } from './deterministic-filter.service';
import { BedrockService } from './bedrock.service';
import { CatalogueModule } from '../catalogue/catalogue.module';

@Module({
  imports: [CatalogueModule],
  controllers: [AssistantController],
  providers: [AssistantService, DeterministicFilterService, BedrockService],
  exports: [AssistantService]
})
export class AssistantModule {}
