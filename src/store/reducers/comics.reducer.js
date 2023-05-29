import { COMICS } from '../../../public/comics'

const initialState = {
    comics: COMICS,
    selectedComic: null,
    favComics: [],
};

const ComicsReducer = (state= initialState, action) => {
    return state
};

export default ComicsReducer
