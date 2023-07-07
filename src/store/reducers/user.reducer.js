import { FAV_CHARACTER, FAV_TEAM, LOAD_FAVORITES, LOAD_USER, SET_IMG, UNFAV_CHARACTER, UNFAV_TEAM } from '../actions/user.action';
import { addFavChar, fetchFavCharacters, fetchUser, updateFavChars, updateUser } from '../../db';

const initialState ={
        userName:"",
        userImg: null,
        favCharacters: [],
        favSeries: [],
        favComics:[],
    }

const UserReducer = (state= initialState, action) => {
    switch (action.type){
        case FAV_CHARACTER:
            console.log("uuuuuuuuu", action.payload.character)
            state.favCharacters.push(action.payload.character)
            return state;
        case UNFAV_CHARACTER:
            return {...state, favCharacters: state.favCharacters.filter(element=> element.id!==action.character)};
        case SET_IMG:
            return {...state, userImg: action.imgUri};
        case LOAD_USER:
            return {...state, userImg: action.imgUri};
        case LOAD_FAVORITES:
            return {
                ...state,
                favCharacters:action.favChars,
            }
        default:
            return state
    }
};

export default UserReducer