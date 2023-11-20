"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ImageSchema = new mongoose_1.Schema({
    img: {
        type: String
    },
    name: {
        type: String
    }
});
const imageModel = (0, mongoose_1.model)('heroImg', ImageSchema);
exports.default = imageModel;
