import { addFavChar, fetchFavCharacters, fetchUser, rmvFavChar, updateUser } from "../../db";

export const LOAD_USER = "LOAD_USER";
export const LOAD_FAVORITES = "LOAD_FAVORITES";
export const FAV_CHARACTER = "FAV_CHARACTER";
export const UNFAV_CHARACTER = "UNFAV_CHARACTER";
export const FAV_TEAM = "FAV_TEAM";
export const UNFAV_TEAM = "UNFAV_TEAM";
export const SET_IMG = "SET_IMG";


export const loadUser = imgUri => ({
    type: LOAD_USER, 
    imgUri: imgUri,
});

export const setImg = imgUri => {
    return async dispatch=>{
        const a= updateUser(imgUri);
        console.log("AAAAAA", imgUri)
        dispatch({type: SET_IMG, imgUri: imgUri})
    };
};


export const favCharacter = (item) => {
    return async dispatch => {
        try {
            const result = addFavChar(item)
            dispatch({type: FAV_CHARACTER, payload:{character: item}})
            console.log("NEW FAV", result)
        }catch (error) {
            console.log(error.message)  
            throw error;
        }
    }
};

export const unFavCharacter = (item)=> {
    return async dispatch =>{
        try{
            rmvFavChar(item.id);
            dispatch({
                type: UNFAV_CHARACTER,
                character: item.id,
            })
        }catch(err){
            console.log("Error al borrar Favorito", err)
        }
    }
}

export const loadFavorites=(favChars)=>({
    type: LOAD_FAVORITES,
    favChars: favChars,
  });
  