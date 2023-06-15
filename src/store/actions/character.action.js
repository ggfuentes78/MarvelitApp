export const SELECTED_CHARACTER = "SELECTED_CHARACTER";
export const FAV_CHARACTER = "FAV_CHARACTER";
export const UNFAV_CHARACTER = "UNFAV_CHARACTER";

export const selectedCharacter = id => ({
    type: SELECTED_CHARACTER,
    characterId: id,
});
