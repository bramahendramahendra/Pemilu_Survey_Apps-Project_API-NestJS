import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length, MaxLength, MinLength } from 'class-validator';

export class CreateRespondentsDto {
    @ApiProperty({ 
        example: '3709761111950005',
        required: true 
    })
    @IsString()
    nik: string;

    @ApiProperty({ 
        type: 'string',
        format: 'binary',
        required: true
    })
    @IsOptional()
    ktp: any;

    @ApiProperty({ 
        example: 'Brama', 
        required: true 
    })
    @IsString()
    @Length(1, 100)
    @MinLength(1)
    @MaxLength(100)
    nama: string;
}