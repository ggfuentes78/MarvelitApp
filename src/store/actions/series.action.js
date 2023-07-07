import {getInfo, searchDataByTitle} from '../../services/api';

import CONFIG from "../../constants/config";

export const SELECTED_SERIE = "SELECTED_SERIE";
export const LOAD_SERIES = "LOAD_SERIES";
export const LOAD_SINGLE_SERIE= "LOAD_SINGLE_SERIE";
export const SEARCH_SERIES="SEARCH_SERIES"

export const selectedSerie = id => ({
    type: SELECTED_SERIE,
    serieId: id,
});

export const searchSeries = (startsWith, page) => {
    const uri= CONFIG.URI_GET_SERIES ; 
    const orderBy="title";
    console.log("STARTSWITH", startsWith)
    return async dispatch => {
        try{
            const response = await searchDataByTitle(uri, orderBy, startsWith, page)
            const data = response.data.data;
            console.log("SEARCHED DATA", data);
            dispatch({
                type: SEARCH_SERIES,
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
            console.log("ERROR DEL SEARCH_COMICS", error)
        }    
    
    }
}
export const loadCharSeries = (uri) => {
    const orderBy="name"
    return async dispatch => {
        try{
            const resp = await getInfo(uri)
            console.log("LOAD SERIES", JSON.stringify(resp))
            const data = resp.data.data;
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
            console.log("ERROR DEL LOAD_SERIES_URI", error)
        }    
    
    }
}
export const loadSeries = (page) => {
    const uri= CONFIG.URI_GET_SERIES;
    const orderBy="title"
    return async dispatch => {
        try{
            const response = await getInfo(uri, orderBy ,page)
            const data = response.data.data;
            console.log("DATA SERIES", JSON.stringify(response));
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