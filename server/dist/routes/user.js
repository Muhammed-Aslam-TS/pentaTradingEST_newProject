"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { upload } from './../middleware/multer';
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const multer_1 = __importDefault(require("../middleware/multer"));
const ProjectsController_1 = __importDefault(require("../controller/ProjectsController"));
const router = express_1.default.Router();
router.post('/addImages', multer_1.default.single('file'), userController_1.default.heroImage);
router.get('/getImages', userController_1.default.getHeroImage);
router.post('/addResidentialImages', multer_1.default.array('file', 10), ProjectsController_1.default.AddProjects);
router.get('/getResidentialImages', ProjectsController_1.default.getProjectsImages);
router.get('/getResidentialGalleryImages', ProjectsController_1.default.getResidentialGalleryImages);
router.delete('/DeleteBannerImage', userController_1.default.deleteBannerImage);
router.delete('/deleteProjects', ProjectsController_1.default.deleteProjects);
exports.default = router;
