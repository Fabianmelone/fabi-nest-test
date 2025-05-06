import {
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class Message {
  @IsOptional()
  id?: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  author: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  message: string;

  @ApiProperty({required: true})
  @IsNotEmpty()
  title: string;

  @ApiProperty({required: false})
  @IsOptional()
  @IsLongitude()
  longitude?: number;

  @ApiProperty({required: false})
  @IsOptional()
  @IsLatitude()
  latitude?: number;
}

export class UpdateMessage extends Message {}
export class CreateMessage extends Message {}
