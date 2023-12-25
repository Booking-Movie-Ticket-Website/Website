import { createSlice } from '@reduxjs/toolkit';

const CheckoutSlice = createSlice({
    name: 'CheckoutSlice',
    initialState: {
        bookingData: null,
    },
    reducers: {
        getBookingData: (state, action) => {
            state.bookingData = action.payload;
        },
    },
});

export const { getBookingData } = CheckoutSlice.actions;

export default CheckoutSlice.reducer;
