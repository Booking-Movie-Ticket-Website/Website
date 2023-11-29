import { createSlice } from '@reduxjs/toolkit';

const HeaderBannerSlice = createSlice({
    name: 'headerbanner',
    initialState: {
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
