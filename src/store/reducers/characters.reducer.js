import { FAV_CHARACTER, SELECTED_CHARACTER, UNFAV_CHARACTER } from "../actions/character.action";

import CHARACTERS from '../../../public/characters';

console.log('ppp',CHARACTERS)
const initialState = {
    characters: CHARACTERS,
    selectedCharacter: null, 
    favCharacters: [],
};

const CharactersReducer = (state= initialState, action) => {
    // return state:
    switch (action.type){
        case SELECTED_CHARACTER:
            const IndexCharacter = state.characters.findIndex(char => char.id === action.characterId);
            console.log("INDEX =>", action.characterId, IndexCharacter)
            if (IndexCharacter ===-1) return state;
            return {...state, selectedCharacter: state.characters[IndexCharacter]};
        // case FAV_CHARACTER:
        //     console.log("FAV", action.character)
        //     state.favCharacters.push(action.character)
        //     console.log("FAVS=>", state.favCharacters)
        //     return state;
        // case UNFAV_CHARACTER:
        //     console.log("UNFAV", action.character)
        //     console.log("FAVS=>", state.favCharacters)
        //     return {...state, favCharacters: state.favCharacters.filter(element=> element!==action.character)};
        default:
            return state
    }
};

export default CharactersReducer;
