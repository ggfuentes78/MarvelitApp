import CONFIG from "../../constants/config";
import axios from "axios";
import {getInfo}from "../../services/api";
import md5 from "md5";
import timestamp from "timestamp";

export const SELECTED_SERIE = "SELECTED_SERIE";
export const LOAD_SERIES = "LOAD_SERIES";
export const LOAD_SINGLE_SERIE= "LOAD_SINGLE_SERIE";

export const selectedSerie = id => ({
    type: SELECTED_SERIE,
    serieId: id,
});

export const loadSeries = (uri) => {
    // console.log("ENTRE A LOAD SERIES!!!!!!")
    const orderBy="title"
    return async dispatch => {
        try{
            // const tmstp=timestamp()
            // console.log("TIME_SERIE===>", tmstp, uri)
            const response = await getInfo(uri, orderBy ,0)
            // const response = await axios.get(CONFIG.URI_START+CONFIG.URI_GET_SERIES,{
            //     params:{
            //         ts: tmstp,
            //         apikey: CONFIG.PUBLIC_KEY,
            //         hash: md5(`${tmstp}${CONFIG.PRIVATE_KEY}${CONFIG.PUBLIC_KEY}`),
            //     }
            // })
            const data = response.data.data;
            // console.log("DATA SERIES", JSON.stringify(data));
            dispatch({
                type: LOAD_SERIES,
                series: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOADSERIES", error)
        }    
    
    }
    }
export const loadSingleSerie =(uri)=>{
    return async dispatch => {
        try{
            const response = await getInfo(uri,orderBy, 0)
            const data = response.data.data;
            dispatch({
                type: LOAD_SINGLE_SERIE,
                serieData: data.results,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOAD_SINGLE_SERIE", error)
        }    
    
    }

}