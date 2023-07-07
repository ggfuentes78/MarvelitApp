import { API_LIST_END, API_REQUEST_CHARACTERS, FAV_CHARACTER, LOAD_CHARACTERS, SEARCH_CHARACTERS, SELECTED_CHARACTER, UNFAV_CHARACTER, UNLOAD_CHARACTERS } from "../actions/character.action";

const initialState = {
    characters: [],
    selectedCharacter: null, 
    favCharacters: [],
    loading: false,
    moreLoading: false,
    isListEnd: false,
    error: null,
    moreError: null,
};

const CharactersReducer = (state= initialState, action) => {
    switch (action.type){
        case SELECTED_CHARACTER:
            const IndexCharacter = state.characters.findIndex(char => char.id === action.characterId);
            if (IndexCharacter ===-1) return state;
            return {...state, selectedCharacter: state.characters[IndexCharacter]};
        case API_REQUEST_CHARACTERS:
            if(action.payload.page===0){
                return {...state, loading: true}
            } else {
                return {...state, moreLoading:true}
            };
        case LOAD_CHARACTERS:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        characters: action.characters
                    }
                }
                return {
                    ...state,
                    characters: [...state.characters, ...action.characters]
                }
            }
        case SEARCH_CHARACTERS:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        characters: action.characters
                    }
                }
                return {
                    ...state,
                    characters: [...state.characters, ...action.characters]
                }
            }
        case API_LIST_END:
            return {
                ...state,
                isListEnd: true,
                loading: false,
                moreLoading:false,
            }
        case UNLOAD_CHARACTERS:
            return {
                ...state,
                characters: action.characters,
            }
        default:
            return state
    }
};

export default CharactersReducer;
