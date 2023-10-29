import { Request, Response } from "express";
import ResidentialHelpers from "../helpers/ResidentialHelpers";
import ResidentalImageModel from "../models/ResidentalImageModels";

export default {

    async AddResidentialImage(req: Request, res: Response) {
        try {
            const data = req.files
            const body = req.body
            await ResidentialHelpers.ResidentialImage(data, body);
            res.json('ResidentailImage uploaded');
        } catch (error) {
            res.status(500).json({ error: 'Image upload failed' });
        }
    },
    async getResidentialImage(req: Request, res: Response) {
        try {
            // const id = '6535e5c2a6fd5d891e80fc4d' as unknown as ObjectId
            const response= await ResidentalImageModel.find({})
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve residential images' });
        }
    },
    async getResidentialGalleryImages(req: Request, res: Response) {
        try {
            const imageId = req.query.imageId
            const response= await ResidentalImageModel.findOne({_id:imageId})
            console.log(response, 'residential___________________');
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve residential images' });
        }
    },

    

}
