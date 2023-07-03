import { addFavChar, fetchFavCharacters, fetchUser, updateUser } from "../../db";

export const LOAD_USER = "LOAD_USER";
export const LOAD_FAV_CHARACTERS = "LOAD_FAV_CHARACTERS";
export const FAV_CHARACTER = "FAV_CHARACTER";
export const UNFAV_CHARACTER = "UNFAV_CHARACTER";
export const FAV_TEAM = "FAV_TEAM";
export const UNFAV_TEAM = "UNFAV_TEAM";
export const SET_IMG = "SET_IMG";

// export const loadUser = user => ({
//     type: LOAD_USER,
//     user: user,
// });

export const loadUser = () => {
    // console.log("111r")
    return async dispatch => {
      try {
        // console.log("first")
        const user = await fetchUser();
        // const favChars = await fetchFavCharacters();
        // console.log("USER", user);
        dispatch({ type: LOAD_USER, user: user.rows._array});
      } catch (error) {
        throw error;
      }
    }
};

export const setImg = imgUri => {
    return async dispatch=>{
        await updateUser(imgUri);
        dispatch({type: SET_IMG, imgUri: imgUri})
    };
};

// const fileName = image.split("/").pop();
//     const Path = FileSystem.documentDirectory + fileName;
//     try {
//       FileSystem.moveAsync({
//         from: image,
//         to: Path,
//       });
//       const result = await insertAddress(
//         title,
//         image,
//         address,
//         location.lat,
//         location.lng
//       );
//       console.log(result);
//     } catch (error) {
//       console.log(error.message);
//       throw error;
//     }
//     dispatch({
//       type: ADD_PLACE,
//       payload: {
//         title,
//         image: Path,
//         address,
//         lat: location.lat,
//         lng: location.lng,
//       },
//     });



export const favCharacter = (item) => {
    // console.log("entre a action, favCharacter", item)
    return async dispatch => {
        try {
            // console.log("HOLAAAA",item)
            const result = await addFavChar(item.id, item.name, item.image)
            // console.log("NEW FAV", result)
        }catch (error) {
            console.log(error.message)  
            throw error;
        }
        dispatch({type: FAV_CHARACTER, payload:{character: item}})
    }
};

export const unFavCharacter = (item)=> ({
    type: UNFAV_CHARACTER,
    character: item,
})

export const favTeam = item => ({
    type: FAV_TEAM,
    team: item,
});

export const unFavTeam = item => ({
    type: UNFAV_TEAM,
    team: item,
})

export const loadFavCharacters = () => {
    return async dispatch => {
      try {
        const result = await fetchFavCharacters();
        // console.log("load favs",result);
        dispatch({ type: LOAD_FAV_CHARACTERS, favCharacters: result.rows._array });
      } catch (error) {
        throw error;
      }
    };
  };