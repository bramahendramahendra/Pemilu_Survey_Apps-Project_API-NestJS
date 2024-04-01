import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, Length, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateSurveyorsDto {
    @ApiProperty({ 
        example: 'Brama', 
        required: true 
    })
    @IsString()
    @Length(1, 100)
    @MinLength(1)
    @MaxLength(100)
    nama: string;

    @ApiProperty({ 
        example: 'ST-0232233-OPSE', 
        required: true 
    })
    @IsString()
    @Length(1, 20)
    @MinLength(1)
    @MaxLength(20)
    referral_code: string;

    @ApiProperty({ 
        example: 1, 
        required: true 
    })
    @IsInt()
    @Min(1)
    @Max(3)
    jumlah_respondents: number;
}