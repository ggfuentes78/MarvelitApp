import { LOAD_COMICS, LOAD_NEW_COMICS, LOAD_NEXT_COMICS, LOAD_SINGLE_COMIC, SEARCH_COMICS, SELECTED_COMIC, SELECTED_NEW_COMIC, SELECTED_NEXT_COMIC } from "../actions/comic.action";

const initialState = {
    comics: [],
    newComics: [],
    nextComics: [],
    selectedComic: null,
    selectedComicFullData: [],
    favComics: [],
};

const ComicsReducer = (state= initialState, action) => {
    switch (action.type){
        case SELECTED_COMIC:
            const IndexComic = state.comics.findIndex(comic => comic.id === action.comicId);
            console.log("INDICE", IndexComic)
            if (IndexComic ===-1) {
                return state};
            return {...state, selectedComic: state.comics[IndexComic]};
        case SELECTED_NEW_COMIC:
            const IndexNewComic = state.newComics.findIndex(comic => comic.id === action.comicId);
            if (IndexNewComic ===-1) return state;
            return {...state, selectedComic: state.newComics[IndexNewComic]};
        case SELECTED_NEXT_COMIC:
            const IndexNextComic = state.nextComics.findIndex(comic => comic.id === action.comicId);
            if (IndexNextComic ===-1) return state;
            return {...state, selectedComic: state.nextComics[IndexNextComic]};    
        case LOAD_COMICS:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        comics: action.comics
                    }
                }
                return {
                    ...state,
                    comics: [...state.comics, ...action.comics]
                }
            }
        case LOAD_NEW_COMICS:
            return {...state, newComics: action.comics};
        case LOAD_NEXT_COMICS:
            return {...state, nextComics: action.comics};
        case LOAD_SINGLE_COMIC:
            return {...state, selectedComicFullData: action.comicData}
        case SEARCH_COMICS:
            if (action.offset>action.total){
                return state
            }else{
                if(action.page==0){
                    return {
                        ...state,
                        comics: action.comics
                    }
                }
                return {
                    ...state,
                    comics: [...state.comics, ...action.comics]
                }
            }
        default:
            return state
    }
};

export default ComicsReducer
