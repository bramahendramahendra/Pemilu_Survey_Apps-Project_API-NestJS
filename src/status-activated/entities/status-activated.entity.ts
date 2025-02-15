import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('status_activated')
export class StatusActivated {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
    })
    id: number;

    @Column({
        type: 'varchar',
        length: 15, 
        charset: 'utf8mb4',
        collation: 'utf8mb4_unicode_ci',
        nullable: true,
        default: null
    })
    status: string;

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
}