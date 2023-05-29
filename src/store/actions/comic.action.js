export const SELECTED_COMIC = "SELECTED_COMIC"

export const selectedComic = id => ({
    type: SELECTED_COMIC,
    comicId: id,
});
