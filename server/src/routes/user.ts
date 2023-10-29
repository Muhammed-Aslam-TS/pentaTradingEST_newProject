// import { upload } from './../middleware/multer';
import express from "express";
import userController  from "../controller/userController";
import  upload  from "../middleware/multer";
import ResidentialController from "../controller/ResidentialController";

const router = express.Router();


router.post('/addImages', upload.single('file'), userController.heroImage);
router.get('/getImages',  userController.getHeroImage);
router.post('/addResidentialImages', upload.array('file',10), ResidentialController.AddResidentialImage);
router.get('/getResidentialImages',  ResidentialController.getResidentialImage);
router.get('/getResidentialGalleryImages',  ResidentialController.getResidentialGalleryImages);



export default router; 