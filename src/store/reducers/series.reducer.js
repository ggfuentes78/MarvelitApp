import { LOAD_SERIES, LOAD_SINGLE_SERIE, SELECTED_SERIE } from "../actions/series.action";

// import { SERIES } from '../../../public/series'

const initialState = {
    series: [],
    selectedSeries: null,
    favSeries: [],
    selectedSerieFullData:[]
};

const SeriesReducer = (state= initialState, action) => {
    switch (action.type){
        case SELECTED_SERIE:
            const IndexSerie = state.series.findIndex(serie => serie.id === action.serieId);
            // console.log("INDEX SERIE =>", action.serieId, IndexSerie)
            if (IndexSerie ===-1) return state;
            return {...state, selectedSeries: state.series[IndexSerie]};
        case LOAD_SERIES:
            return {...state, series: action.series};
        case LOAD_SINGLE_SERIE:
            return {...state, selectedSerieFullData: action.serieData}
        default:
            return state
    }
};

export default SeriesReducer
