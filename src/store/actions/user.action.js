export const LOAD_USER = "LOAD_USER";
export const FAV_CHARACTER = "FAV_CHARACTER";
export const UNFAV_CHARACTER = "UNFAV_CHARACTER";
export const FAV_TEAM = "FAV_TEAM";
export const UNFAV_TEAM = "UNFAV_TEAM";
export const SET_IMG = "SET_IMG";

export const loadUser = user => ({
    type: LOAD_USER,
    user: user,
});

export const setImg = imgUri => ({
    type: SET_IMG,
    imgUri: imgUri,
});

export const favCharacter = item => ({
    type: FAV_CHARACTER,
    character: item,
});

export const unFavCharacter = item => ({
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