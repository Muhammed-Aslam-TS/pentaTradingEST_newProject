"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ImgResidentialSchema = new mongoose_1.Schema({
    img: {
        type: [String],
    },
    category: {
        type: String
    },
    hedding: {
        type: String
    },
    description: {
        type: String
    }
});
const ResidentalImageModel = (0, mongoose_1.model)('ResidentialImg', ImgResidentialSchema);
exports.default = ResidentalImageModel;
