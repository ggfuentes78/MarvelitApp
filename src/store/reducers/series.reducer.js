import { LOAD_SERIES, LOAD_SINGLE_SERIE, SEARCH_SERIES, SELECTED_SERIE } from "../actions/series.action";

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
            console.log("INDEX SERIE =>", action.serieId, IndexSerie)
            if (IndexSerie ==-1) return state;
            return {...state, selectedSeries: state.series[IndexSerie]};
        case LOAD_SERIES:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        series: action.series
                    }
                }
                return {
                    ...state,
                    series: [...state.series, ...action.series]
                }
            }
        case LOAD_SINGLE_SERIE:
            return {...state, selectedSerieFullData: action.seriesData}
        case SEARCH_SERIES:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        series: action.series
                    }
                }
                return {
                    ...state,
                    series: [...state.series, ...action.series]
                }
            }
        default:
            return state
    }
};

export default SeriesReducer
