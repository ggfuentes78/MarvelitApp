import CONFIG from "../constants/config";
import axios from "axios";
import md5 from "md5";
import timestamp from "timestamp";

const reqLimit=20;

export const getInfo=async(uri, orderBy, page) => {
    try{
        const tmstp=timestamp()
        // console.log("TIME3===>", page, "TS", tmstp, "HASH:", md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`), "APIKEY:", CONFIG.PUBLIC_KEY)
        const response = await axios.get(uri,{
            params:{
                ts: tmstp,
                apikey: CONFIG.PUBLIC_KEY,
                hash: md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`),
                orderBy: orderBy,
                limit: reqLimit,
                offset: (reqLimit*(page)),
            }
        })
        return response
    }catch(err){
        console.log("ERROR", err)
    }
}

export const searchData= async(uri, orderBy, searchText, page) =>{
    try{
        const tmstp=timestamp()
        const response = await axios.get(uri,{
            params:{
                ts: tmstp,
                apikey: CONFIG.PUBLIC_KEY,
                hash: md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`),
                nameStartsWith: searchText,
                orderBy: orderBy,
                limit: reqLimit,
                offset: (reqLimit*(page)),
            }
        })
        console.log("SEARCHHHHH ", response.data.data)
        console.log("first", searchText)
        return response
    }catch(err){
        console.log("ERROR", err)
    }
}

export const getNewComics=async(uri, orderBy, dateDescriptor, page) => {
    try{
        const tmstp=timestamp()
        // console.log("TIME3===>", page, "TS", tmstp, "HASH:", md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`), "APIKEY:", CONFIG.PUBLIC_KEY)
        const response = await axios.get(uri,{
            params:{
                ts: tmstp,
                apikey: CONFIG.PUBLIC_KEY,
                hash: md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`),
                orderBy: orderBy,
                dateDescriptor: dateDescriptor,
                limit: reqLimit,
                offset: (reqLimit*(page)),
            }
        })
        return response
    }catch(err){
        console.log("ERROR", err)
    }
}

// export default getInfo
