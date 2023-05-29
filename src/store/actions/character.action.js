export const SELECTED_CHARACTER = "SELECTED_CHARACTER";
export const FAV_CHARACTER = "FAV_CHARACTER";
export const UNFAV_CHARACTER = "UNFAV_CHARACTER";

export const selectedCharacter = id => ({
    type: SELECTED_CHARACTER,
    characterId: id,
});

export const favCharacter = item => ({
    type: FAV_CHARACTER,
    character: item,
});

export const unFavCharacter = item => ({
    type: UNFAV_CHARACTER,
    character: item,
})
