import { combineReducers, createStore } from "redux";

import CharactersReducer from "./reducers/characters.reducer";
import ComicsReducer from "./reducers/comics.reducer";
import TeamsReducer from "./reducers/teams.reducer";
import UserReducer from "./reducers/user.reducer";

const RootReducer = combineReducers({
    characters: CharactersReducer,
    comics: ComicsReducer,
    teams: TeamsReducer,
    user: UserReducer,
});

export default createStore(RootReducer);