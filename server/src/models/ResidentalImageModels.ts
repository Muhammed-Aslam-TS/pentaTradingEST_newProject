import { Schema, model } from "mongoose";




const ImgResidentialSchema = new Schema({
    img: {
        type: [String],
    },
    name: {
        type: String
    }
})

const ResidentalImageModel = model('ResidentialImg', ImgResidentialSchema)
export default ResidentalImageModel