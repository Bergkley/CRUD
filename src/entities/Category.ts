import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export class Category {
    
    id: string

    
    name: string

    
    description: string

    
    created_at: Date

    
}