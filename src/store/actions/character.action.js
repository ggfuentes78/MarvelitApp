import {getInfo, searchData} from "../../services/api";

import CONFIG from "../../constants/config";
import axios from "axios";
import { fetchFavCharacters } from "../../db";
import md5 from "md5";
import timestamp from "timestamp";

export const SELECTED_CHARACTER = "SELECTED_CHARACTER";

export const LOAD_CHARACTERS = "LOAD_CHARACTERS";
export const API_REQUEST_CHARACTERS = "API_REQUEST_CHARACTERS";
export const SEARCH_CHARACTERS = "SEARCH_CHARACTERS";
export const API_LIST_END = "API_LIST_END";
export const UNLOAD_CHARACTERS = "UNLOAD_CHARACTERS";


export const selectedCharacter = id => ({
    type: SELECTED_CHARACTER,
    characterId: id,
});

export const loadCharacters = (page) => {
    const uri= CONFIG.URI_GET_CHARACTERS ; 
    const orderBy="name";
    return async dispatch => {
        try{
            const tmstp=timestamp()
            const response = await getInfo(uri, orderBy, page)
            const data = response.data.data;
            dispatch({
                type: LOAD_CHARACTERS,
                characters: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOADCHARS", error)
        }    
    
    }
    }

    export const unloadCharacters=()=>({
            type: UNLOAD_CHARACTERS,
            characters: [],
        })

    export const searchCharacters = (startsWith, page) => {
        const uri= CONFIG.URI_GET_CHARACTERS ; 
        const orderBy="name";
        console.log("STARTSWITH", startsWith)
        return async dispatch => {
            try{
                const tmstp=timestamp()
                const response = await searchData(uri, orderBy, startsWith, page)
                const data = response.data.data;
                console.log("SEARCHED DATA", data);
                dispatch({
                    type: SEARCH_CHARACTERS,
                    characters: data.results,
                    page: data.offset,
                    limit: data.limit,
                    total: data.total,
                    loading: true,
                    error: false,
                    errorMessage: "",
                    successMessage: "",
                })
            }catch(error){
                console.log("ERROR DEL SEARCHCHARS", error)
            }    
        
        }
        }
