"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageModels_1 = __importDefault(require("../models/imageModels"));
const ResidentalImageModels_1 = __importDefault(require("../models/ResidentalImageModels"));
exports.default = {
    HeroImage(image, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resoleve, reject) => __awaiter(this, void 0, void 0, function* () {
                let Imagefiles = image;
                body.img = Imagefiles;
                const data = body;
                const resoponse = yield imageModels_1.default.create(data);
                resoleve(resoponse);
            }));
        });
    },
    ResidentialImage(image, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resoleve, reject) => __awaiter(this, void 0, void 0, function* () {
                let Imagefiles = image.path;
                const ImageFileName = Imagefiles.map((images) => {
                    return images.filename;
                });
                body.img = ImageFileName;
                const data = body;
                const resoponse = yield ResidentalImageModels_1.default.create(data);
                resoleve(resoponse);
            }));
        });
    }
};
