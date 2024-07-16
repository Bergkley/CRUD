import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
    name: string;
    description: string;
}

