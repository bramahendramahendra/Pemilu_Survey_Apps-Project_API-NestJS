import { FormAnswers } from "src/form-answers/entities/form-answers.entity";
import { Respondents } from "src/respondents/entities/respondents.entity";
import { Surveyors } from "src/surveyors/entities/surveyors.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('respondent_answers')
export class RespondentAnswers {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
    })
    id: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_respondents: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_surveyors: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_form_answers: number;

    @Column({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    })
    answer: string;

    @Column({
        type: 'tinyint',
        nullable: false,
        default: null
    })
    poin: number;

    @CreateDateColumn({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        precision: 6,
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    })
    updated_at: Date;

    @ManyToOne(() => Respondents, respondents => respondents.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_respondents' })
    respondents: Respondents;

    @ManyToOne(() => Surveyors, surveyors => surveyors.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_surveyors' })
    surveyors: Surveyors;

    @ManyToOne(() => FormAnswers, formAnswers => formAnswers.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_form_answers' })
    formAnswers: FormAnswers;
}