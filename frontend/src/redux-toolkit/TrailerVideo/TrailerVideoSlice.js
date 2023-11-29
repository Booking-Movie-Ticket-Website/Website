import { createSlice } from '@reduxjs/toolkit';

const TrailerVideoSlice = createSlice({
    name: 'trailervideo',
    initialState: {
        isOpen: false,
        videoData: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.videoData = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.videoData = null;
        },
    },
});

export const { openModal, closeModal } = TrailerVideoSlice.actions;

export default TrailerVideoSlice.reducer;
