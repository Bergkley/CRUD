import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";


export class Video {
    id: string

    name: string

    description: string

    duration: number

    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
    
    
}