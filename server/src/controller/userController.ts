import express, { Request, Response, NextFunction } from "express";
import imageModel from "../models/imageModels";
import ResidentalImageModel from "../models/imageModels";
import heroHelpers from "../helpers/heroHelpers";
import ResidentialHelpers from "../helpers/ResidentialHelpers";

export default {
    async heroImage(req: Request, res: Response) {
        try {
            const data = req.file
            const body = req.body
            await heroHelpers.HeroImage(data, body);
            res.json('Image uploaded');
        } catch (error) {
            res.status(500).json({ error: 'Image upload failed' });
        }
    },

    async getHeroImage(req: Request, res: Response) {
        try {
            const images = await imageModel.find({}).sort({ _id: -1 });
            res.json(images);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve images' });
        }
    },

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
   
}
