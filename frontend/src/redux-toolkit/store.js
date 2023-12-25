import { configureStore } from '@reduxjs/toolkit';
import BookingTicketReducer from './BookingTicket/BookingTicketSlice';
import HeaderBannerReducer from './HeaderBanner/HeaderBannerSlice';
import TrailerVideoSlice from './TrailerVideo/TrailerVideoSlice';
import BreadcrumbSlice from './Breadcrumb/BreadcrumbSlice';
import CheckoutSlice from './Checkout/CheckoutSlice';
export const store = configureStore({
    reducer: {
        bookingticket: BookingTicketReducer,
        headerbanner: HeaderBannerReducer,
        trailervideo: TrailerVideoSlice,
        breadcrumb: BreadcrumbSlice,
        checkout: CheckoutSlice,
    },
});
