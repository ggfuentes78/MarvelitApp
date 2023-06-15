import { FAV_CHARACTER, SELECTED_CHARACTER, UNFAV_CHARACTER } from "../actions/character.action";

import CHARACTERS from '../../../public/characters';

console.log('ppp',CHARACTERS)
const initialState = {
    characters: CHARACTERS,
    selectedCharacter: null, 
    favCharacters: [],
};

const CharactersReducer = (state= initialState, action) => {
    switch (action.type){
        case SELECTED_CHARACTER:
            const IndexCharacter = state.characters.findIndex(char => char.id === action.characterId);
            console.log("INDEX =>", action.characterId, IndexCharacter)
            if (IndexCharacter ===-1) return state;
            return {...state, selectedCharacter: state.characters[IndexCharacter]};
        default:
            return state
    }
};

export default CharactersReducer;
