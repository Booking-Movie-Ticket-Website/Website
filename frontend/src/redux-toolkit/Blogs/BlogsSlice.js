import { createSlice } from '@reduxjs/toolkit';

const BlogsSlice = createSlice({
    name: 'BlogsSlice',
    initialState: {
        blogTitle: '', //blog title for breadcrumb
    },
    reducers: {
        getData: (state, action) => {
            state.blogTitle = action.payload;
        },
    },
});

export const { getData } = BlogsSlice.actions;

export default BlogsSlice.reducer;
