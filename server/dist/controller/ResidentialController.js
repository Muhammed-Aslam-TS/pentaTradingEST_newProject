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
const ProjectsHelpers_1 = __importDefault(require("../helpers/ProjectsHelpers"));
const ResidentalImageModels_1 = __importDefault(require("../models/ResidentalImageModels"));
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
const firebaseConfig = {
    apiKey: "AIzaSyBW6nKABbPUr6XVE0yFWc3sZqdMhvcuJuc",
    authDomain: "black-and-white-file-store.firebaseapp.com",
    projectId: "black-and-white-file-store",
    storageBucket: "black-and-white-file-store.appspot.com",
    messagingSenderId: "348453775435",
    appId: "1:348453775435:web:6523015a164c3173e405ce",
    measurementId: "G-8PRYFRY2FT"
};
(0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)();
exports.default = {
    AddProjects(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const storageRef = (0, storage_1.ref)(storage, `black-and-white-files/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`);
                (0, storage_1.uploadBytes)(storageRef, (_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer).then((snapshort) => __awaiter(this, void 0, void 0, function* () {
                    const imageUrl = yield (0, storage_1.getDownloadURL)(snapshort.ref);
                    console.log('__________________________________');
                    console.log(imageUrl);
                    console.log('__________________________________');
                    const body = req.body;
                    yield ProjectsHelpers_1.default.ProjectsImages(imageUrl, body);
                    res.status(200).json({ message: "Course data received successfully" });
                }));
                const data = req.files;
                console.log(data);
                const body = req.body;
                yield ProjectsHelpers_1.default.ProjectsImages(data, body);
                res.json('ResidentailImage uploaded');
            }
            catch (error) {
                res.status(500).json({ error: 'Image upload failed' });
            }
        });
    },
    getProjectsImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const id = '6535e5c2a6fd5d891e80fc4d' as unknown as ObjectId
                const response = yield ResidentalImageModels_1.default.find({});
                res.json(response);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to retrieve residential images' });
            }
        });
    },
    getResidentialGalleryImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const imageId = req.query.imageId;
                const response = yield ResidentalImageModels_1.default.findOne({ _id: imageId });
                console.log(response, 'residential___________________');
                res.json(response);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to retrieve residential images' });
            }
        });
    },
};
function giveCurrentDateTime() {
    throw new Error("Function not implemented.");
}
