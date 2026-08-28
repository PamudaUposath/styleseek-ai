import {
  IsString,
  IsNotEmpty,
  MaxLength,
  MinLength,
  IsArray,
  IsOptional,
  ValidateNested
} from 'class-validator';
import { Type, Transform } from 'class-transformer';

export class ChatMessageDto {
  @IsString()
  @IsNotEmpty()
  role!: 'user' | 'assistant';

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  content!: string;
}

export class RecommendRequestDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @MinLength(2, { message: 'Message must be at least 2 characters long' })
  @MaxLength(500, { message: 'Message cannot exceed 500 characters' })
  message!: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatMessageDto)
  history?: ChatMessageDto[];
}
