import { LOAD_EVENTS, LOAD_SINGLE_EVENT, SELECTED_EVENT } from "../actions/event.action";

const initialState = {
    events: [],
    selectedEvent: null,
    favEvents: [],
    selectedEventFullData: [],
};

const EventsReducer = (state= initialState, action) => {
    switch (action.type){
        case SELECTED_EVENT:
            const IndexEvent = state.events.findIndex(event => event.id === action.eventId);
            if (IndexEvent ===-1) return state;
            return {...state, selectedEvent: state.events[IndexEvent]};
        case LOAD_EVENTS:
            return {...state, events: action.events}
        case LOAD_SINGLE_EVENT:
            return {...state, selectedEventFullData: action.eventData}
        default:
            return state
    }
};

export default EventsReducer
