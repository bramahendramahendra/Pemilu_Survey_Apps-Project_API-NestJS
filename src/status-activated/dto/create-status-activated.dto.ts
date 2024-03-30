import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MaxLength, MinLength } from 'class-validator';

export class CreateStatusActivatedDto {
    @ApiProperty({ 
        example: 'Aktif',
        required: true 
    })
    @IsString()
    @Length(1, 15)
    @MinLength(1)
    @MaxLength(15)
    status: string;
}