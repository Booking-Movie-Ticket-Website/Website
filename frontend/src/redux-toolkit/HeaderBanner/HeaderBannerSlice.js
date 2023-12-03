import { createSlice } from '@reduxjs/toolkit';

const HeaderBannerSlice = createSlice({
    name: 'headerbanner',
    initialState: {
        // movieData {
        // movieSrc -> movie poster src
        // bannerRoute -> route for header banner showing (= name in movie detail, = category's name in category page, others)
        // movieId -> id of movie in movie detail, null in others page
        // }
        movieData: null,
    },
    reducers: {
        getMovieData: (state, action) => {
            state.movieData = action.payload;
        },
    },
});

export const { getMovieData } = HeaderBannerSlice.actions;

export default HeaderBannerSlice.reducer;
