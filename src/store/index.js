import { applyMiddleware, combineReducers, createStore } from "redux";

import CharactersReducer from "./reducers/characters.reducer";
import ComicsReducer from "./reducers/comics.reducer";
import EventsReducer from "./reducers/events.reducer";
import SeriesReducer from "./reducers/series.reducer";
import UserReducer from "./reducers/user.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
    characters: CharactersReducer,
    comics: ComicsReducer,
    events: EventsReducer,
    series: SeriesReducer,
    user: UserReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));