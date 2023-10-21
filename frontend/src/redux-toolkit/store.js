import { configureStore } from '@reduxjs/toolkit';
import BookingTicketReducer from './BookingTicket/BookingTicketSlice';

export const store = configureStore({
    reducer: BookingTicketReducer,
});
