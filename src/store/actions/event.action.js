import CONFIG from "../../constants/config";
import axios from "axios";
import {getInfo} from "../../services/api";
import md5 from "md5";
import timestamp from "timestamp";

export const SELECTED_EVENT = "SELECTED_EVENT";
export const LOAD_EVENTS = "LOAD_EVENTS";
export const LOAD_SINGLE_EVENT= "LOAD_SINGLE_EVENT";

export const selectedEvent = id => ({
    type: SELECTED_EVENT,
    eventId: id,
});

export const loadEvents = (uri) => {
    const orderBy="name"
    return async dispatch => {
        try{
            const tmstp=timestamp()
            const response = await getInfo(uri,orderBy, 0)
            const data = response.data.data;
            dispatch({
                type: LOAD_EVENTS,
                events: data.results,
                page: data.offset,
                limit: data.limit,
                total: data.total,
                loading: true,
                error: false,
                errorMessage: "",
                successMessage: "",
            })
        }catch(error){
            console.log("ERROR DEL LOADEVENTS", error)
        }    
    
    }
    }

    export const loadSingleEvent =(uri)=>{
        return async dispatch => {
            try{
                const response = await getInfo(uri,orderBy, 0)
                const data = response.data.data;
                dispatch({
                    type: LOAD_SINGLE_EVENT,
                    eventData: data.results,
                    loading: true,
                    error: false,
                    errorMessage: "",
                    successMessage: "",
                })
            }catch(error){
                console.log("ERROR DEL LOAD_SINGLE_EVENT", error)
            }    
        
        }
    
    }