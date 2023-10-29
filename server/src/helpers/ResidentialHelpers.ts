import ResidentalImageModel from "../models/ResidentalImageModels";



export default {

    async ResidentialImage(image: any, body: any) {
        return new Promise(async (resoleve, reject) => {

            const ImageFileName = image.map((images: any) => {
                return images.path
            })
            body.img = ImageFileName
            const data = body
            const response = await ResidentalImageModel.create(data)
            console.log(response,'___________________________aaayehe');
            
            resoleve(response)
        })
    }
}
