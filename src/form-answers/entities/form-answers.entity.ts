import { FormQuestions } from "src/form-questions/entities/form-questions.entity";
import { StatusActivated } from "src/status-activated/entities/status-activated.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('form_answers')
export class FormAnswers {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
    })
    id: number;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_form_questions: number;

    @Column({
        type: 'text',
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    })
    answer: string;

    @Column({
        type: 'char',
        length: 1, 
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    })
    order: string;

    @Column({ 
        type: 'int', 
        unsigned: true 
    })
    id_activated: number;

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

    @ManyToOne(() => FormQuestions, formQuestions => formQuestions.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_form_questions' })
    formQuestions: FormQuestions;

    @ManyToOne(() => StatusActivated, statusActivated => statusActivated.id, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
    @JoinColumn({ name: 'id_activated' })
    statusActivated: StatusActivated;
}