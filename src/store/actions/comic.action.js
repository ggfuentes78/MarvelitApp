import { getInfo, getNewComics } from "../../services/api";

import CONFIG from "../../constants/config";

export const SELECTED_COMIC = "SELECTED_COMIC";
export const SELECTED_NEW_COMIC = "SELECTED_NEW_COMIC";
export const SELECTED_NEXT_COMIC = "SELECTED_NEXT_COMIC";
export const LOAD_COMICS = "LOAD_COMICS";
export const LOAD_SINGLE_COMIC= "LOAD_SINGLE_COMIC";
export const LOAD_NEW_COMICS="LOAD_NEW_COMICS";
export const LOAD_NEXT_COMICS="LOAD_NEXT_COMICS";

export const selectedComic = id => ({
    type: SELECTED_COMIC,
    comicId: id,
});

export const selectedNewComic = id => ({
    type: SELECTED_NEW_COMIC,
    comicId: id,
});

export const selectedNextComic = id => ({
    type: SELECTED_NEXT_COMIC,
    comicId: id,
});

export const loadComics = (uri) => {
    const orderBy="title"
    return async dispatch => {
        try{
            const response = await getInfo(uri,orderBy, 0)
            const data = response.data.data;
            dispatch({
                type: LOAD_COMICS,
                comics: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOAD_COMICS", error)
        }    
    
    }
}

export const loadNewComics = () => {
    const uri= CONFIG.URI_GET_COMICS
    const orderBy="title";
    const dateDescriptor = "thisWeek";
    return async dispatch => {
        try{
            const response = await getNewComics(uri,orderBy, dateDescriptor, 0)
            const data = response.data.data;
            dispatch({
                type: LOAD_NEW_COMICS,
                comics: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOAD_COMICS", error)
        }    
    
    }
}

export const loadNextComics = () => {
    const uri= CONFIG.URI_GET_COMICS
    const orderBy="title";
    const dateDescriptor = "nextWeek";
    return async dispatch => {
        try{
            const response = await getNewComics(uri,orderBy, dateDescriptor, 0)
            const data = response.data.data;
            console.log("next comics", data)
            dispatch({
                type: LOAD_NEXT_COMICS,
                comics: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOAD_COMICS", error)
        }    
    
    }
}

export const loadSingleComic =(uri)=>{
    return async dispatch => {
        try{
            const response = await getInfo(uri,orderBy, 0)
            const data = response.data.data;
            dispatch({
                type: LOAD_SINGLE_COMIC,
                comicData: data.results,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOAD_SINGLE_COMIC", error)
        }    
    
    }

}