import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateFormQuestionsDto {
    @ApiProperty({ 
        example: 'Siapakah pilihan anda ?',
        required: true 
    })
    @IsString()
    @MinLength(1)
    answer: string;

    @ApiProperty({ 
        example: 1, 
        required: true 
    })
    @IsInt()
    @Min(1)
    @Max(3)
    order: number;

    @ApiProperty({
        example: 1,
        required: true
    })
    @IsInt()
    @Min(1)
    @Max(2)
    id_activated: number;
}