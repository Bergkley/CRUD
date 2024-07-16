import { Category } from './Category';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";


export class Video {
    @PrimaryColumn()
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    duration: number

    @CreateDateColumn()
    created_at: Date

    @Column()
    category_id: string

    @ManyToOne(()=> Category)
    @JoinColumn({ name: "category_id" })
    category: Category
    
}