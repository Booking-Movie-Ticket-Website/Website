import { configureStore } from '@reduxjs/toolkit';
import BookingTicketReducer from './BookingTicket/BookingTicketSlice';
import HeaderBannerReducer from './HeaderBanner/HeaderBannerSlice';
import TrailerVideoSlice from './TrailerVideo/TrailerVideoSlice';
import BlogsSlice from './Blogs/BlogsSlice';
export const store = configureStore({
    reducer: {
        bookingticket: BookingTicketReducer,
        headerbanner: HeaderBannerReducer,
        trailervideo: TrailerVideoSlice,
        blogs: BlogsSlice,
    },
});
