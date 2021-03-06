import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { Optional } from '@nestjs/common';

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn({ nullable: true })
    created_at: Timestamp;

    @UpdateDateColumn({ nullable: true })
    updated_at: Timestamp;

}
