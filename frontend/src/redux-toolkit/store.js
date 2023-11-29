import { configureStore } from '@reduxjs/toolkit';
import BookingTicketReducer from './BookingTicket/BookingTicketSlice';
import HeaderBannerReducer from './HeaderBanner/HeaderBannerSlice';
import TrailerVideoSlice from './TrailerVideo/TrailerVideoSlice';
export const store = configureStore({
    reducer: {
        bookingticket: BookingTicketReducer,
        headerbanner: HeaderBannerReducer,
        trailervideo: TrailerVideoSlice,
    },
});
