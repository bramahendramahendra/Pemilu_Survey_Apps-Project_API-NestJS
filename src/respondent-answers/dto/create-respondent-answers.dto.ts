import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateRespondentAnswersDto {
    @ApiProperty({
        example: 1,
        required: true
    })
    @IsInt()
    @Min(1)
    id_respondents: number;

    @ApiProperty({
        example: 1,
        required: true
    })
    @IsInt()
    @Min(1)
    id_surveyors: number;

    @ApiProperty({
        example: 2,
        required: true
    })
    @IsInt()
    @Min(1)
    id_form_answers: number;

    @ApiProperty({ 
        example: 'Partai',
        required: true 
    })
    @IsString()
    @MinLength(1)
    answer: string;

    @ApiProperty({ 
        example: 1, 
        required: false 
    })
    @IsInt()
    @Min(1)
    @Max(3)
    poin: number;
   
}