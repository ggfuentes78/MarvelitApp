import { FAV_CHARACTER, FAV_TEAM, SET_IMG, UNFAV_CHARACTER, UNFAV_TEAM } from '../actions/user.action';

import { TEAMS } from '../../../public/teams'
import wolverine from '../../../assets/wolverine1.png'

const initialState = {
    name: null,
    userImg: wolverine,
    favCharacters: [],
    favTeams: [],
};

const UserReducer = (state= initialState, action) => {
    switch (action.type){
        case FAV_CHARACTER:
            console.log("FAV", action.character)
            state.favCharacters.push(action.character)
            console.log("FAVS=>", state.favCharacters)
            return state;
        case UNFAV_CHARACTER:
            console.log("UNFAV", action.character)
            console.log("FAVS=>", state.favCharacters)
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
            return {...state, usrImg: action.imgUri};
        default:
            return state
    }
};

export default UserReducer