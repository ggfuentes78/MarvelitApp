import { FAV_CHARACTER, FAV_TEAM, LOAD_FAV_CHARACTERS, LOAD_USER, SET_IMG, UNFAV_CHARACTER, UNFAV_TEAM } from '../actions/user.action';
import { addFavChar, fetchFavCharacters, fetchUser, updateFavChars, updateUser } from '../../db';

const initialState ={
        userImg: null,
        favCharacters: [],
        favTeams: [],
    }

const UserReducer = (state= initialState, action) => {
    switch (action.type){
        case FAV_CHARACTER:
            console.log("uuuuuuuuu")
            // console.log("FAV", action.payload.character)
            state.favCharacters.push(action.payload.character)
            // console.log("FAVS=>", state.favCharacters)
            return state;
        case UNFAV_CHARACTER:
            // console.log("UNFAV", action.character)
            // console.log("FAVS=>", state.favCharacters)
            return {...state, favCharacters: state.favCharacters.filter(element=> element!==action.character)};
        case FAV_TEAM:
            console.log("FAV", action.team)
            state.favTeams.push(action.team)
            console.log("FAVS=>", state.favTeams)
            return state;
        case UNFAV_TEAM:
            console.log("UNFAV", action.team)
            console.log("FAVS=>", state.favTeams)
            return {...state, favTeams: state.favTeams.filter(element=> element!==action.team)};
        case SET_IMG:
            updateUser(action.imgUri)
            return {...state, userImg: action.imgUri};
        case LOAD_USER:
            return {...state, userImg: action.user.userImg};
        case LOAD_FAV_CHARACTERS:
                return {...state, favCharacters: action.favCharacters}
        default:
            return state
    }
};

export default UserReducer