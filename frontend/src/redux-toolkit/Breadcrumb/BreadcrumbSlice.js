import { createSlice } from '@reduxjs/toolkit';

const BreadcrumbSlice = createSlice({
    name: 'BreadcrumbSlice',
    initialState: {
        breadcrumbRoute: '', //route for breadcrumb
    },
    reducers: {
        getData: (state, action) => {
            state.breadcrumbRoute = action.payload;
        },
    },
});

export const { getData } = BreadcrumbSlice.actions;

export default BreadcrumbSlice.reducer;
