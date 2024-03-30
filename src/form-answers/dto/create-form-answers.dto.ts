import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateFormAnswersDto {
    @ApiProperty({ 
        example: 'Partai',
        required: true 
    })
    @IsString()
    @MinLength(1)
    answer: string;

    @ApiProperty({ 
        example: 'A', 
        required: true 
    })
    @IsString()
    @MinLength(1)
    @MaxLength(1)
    order: string;

    @ApiProperty({
        example: 1,
        required: true
    })
    @IsInt()
    @Min(1)
    @Max(2)
    id_activated: number;

    @ApiProperty({ 
        example: 1, 
        required: true 
    })
    @IsInt()
    @Min(1)
    @Max(3)
    poin: number;
}