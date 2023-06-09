import { getInfo, getNewComics, searchDataByTitle } from "../../services/api";

import CONFIG from "../../constants/config";

export const SELECTED_COMIC = "SELECTED_COMIC";
export const SELECTED_NEW_COMIC = "SELECTED_NEW_COMIC";
export const SELECTED_NEXT_COMIC = "SELECTED_NEXT_COMIC";
export const LOAD_COMICS = "LOAD_COMICS";
export const LOAD_SINGLE_COMIC= "LOAD_SINGLE_COMIC";
export const LOAD_NEW_COMICS="LOAD_NEW_COMICS";
export const LOAD_NEXT_COMICS="LOAD_NEXT_COMICS";
export const SEARCH_COMICS="SEARCH_COMICS";

export const selectedComic = id => ({
    type: SELECTED_COMIC,
    comicId: id,
});

export const searchComics = (startsWith, page) => {
    const uri= CONFIG.URI_GET_COMICS ; 
    const orderBy="title";
    console.log("STARTSWITH", startsWith)
    return async dispatch => {
        try{
            const response = await searchDataByTitle(uri, orderBy, startsWith, page)
            const data = response.data.data;
            console.log("SEARCHED DATA", data);
            dispatch({
                type: SEARCH_COMICS,
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
            console.log("ERROR DEL SEARCH_COMICS", error)
        }    
    
    }
}

export const selectedNewComic = id => ({
    type: SELECTED_NEW_COMIC,
    comicId: id,
});

export const selectedNextComic = id => ({
    type: SELECTED_NEXT_COMIC,
    comicId: id,
});

export const loadCharComics = (uri) => {
    const orderBy="title"
    return async dispatch => {
        try{
            const response = await getInfo(uri,orderBy, 0)
            console.log("LOAD COMICS", JSON.stringify(response))
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

export const loadComics = (page) => {
    const uri= CONFIG.URI_GET_COMICS ;
    const orderBy="title"
    return async dispatch => {
        try{
            const response = await getInfo(uri,orderBy, page)
            console.log("LOAD COMICS", JSON.stringify(response))
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
            const response = await getInfo(uri, 0)
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