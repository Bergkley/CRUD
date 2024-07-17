import { response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllVideosController {
    async handle() {
        const service = new GetAllCategoriesService();

        const videos = await service.execute()

        return response.json(videos)
    }
}