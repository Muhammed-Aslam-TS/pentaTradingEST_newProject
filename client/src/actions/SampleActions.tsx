import { sample } from "../requests/SampleRequests"

 export const sampleAction = async()=>{
    try{
        console.log("sampleAction")
        const data = await sample()
        alert(data.val)
        console.log("dataa",data.val)
    }catch(error){
        throw error
    }
 }