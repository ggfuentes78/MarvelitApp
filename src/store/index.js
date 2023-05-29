import { combineReducers, createStore } from "redux";

import CharactersReducer from "./reducers/characters.reducer";
import ComicsReducer from "./reducers/comics.reducer";
import TeamsReducer from "./reducers/teams.reducer";

const RootReducer = combineReducers({
    characters: CharactersReducer,
    comics: ComicsReducer,
    teams: TeamsReducer,
});

export default createStore(RootReducer);