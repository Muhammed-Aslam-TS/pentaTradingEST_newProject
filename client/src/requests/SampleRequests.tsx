import API from '../utils/axios'

export const sample = async()=>{
    try{
        console.log("sample")
        const response = await API.get('/')
        return response.data
    }catch(error){
        throw error;
    }
}