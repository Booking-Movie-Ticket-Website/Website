import { createSlice } from '@reduxjs/toolkit';

const BookingTicketSlice = createSlice({
    name: 'BookingTicketSlice',
    initialState: {
        isOpen: false,
        movieId: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.movieId = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.movieId = null;
        },
    },
});

export const { openModal, closeModal } = BookingTicketSlice.actions;

export default BookingTicketSlice.reducer;
