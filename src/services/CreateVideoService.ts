import {getRepository} from "typeorm";
import {Videos} from "../entities/Video";
import {Category} from "../entities/Category";


type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

