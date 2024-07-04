import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

interface PaginationState {
    currentPage: number;
    perPage: number;
    author: number | null;
    blogId: number | null;
}
const initialState: PaginationState = {
    currentPage: 1,
    perPage: 10,
    author: null,
    blogId: null,
}
export const appStore = createSlice({
    name: "app",
    initialState,
    reducers: {
        setPage: (state: PaginationState, action) => {
            console.log('setPage : ', state, action)
            state.currentPage = action.payload
        },
        prevPage: (state: PaginationState, action) => {
            console.log('prevPage : ', state, action)
            state.currentPage = Math.max(0, state.currentPage - 1)
        },
        nextPage: (state: PaginationState, action) => {
            console.log('nextPage : ', state, action)
            state.currentPage = Math.max(0, state.currentPage + 1)
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload
        },
        setAuthor: (state, action) => {
            state.author = action.payload
        },
        setBlogId: (state, action) => {
            state.blogId = action.payload
        }
    }
})
export const store = configureStore({
    reducer: {
        app: appStore.reducer
    }
})
export const { setPage, prevPage, nextPage, setAuthor, setBlogId } = appStore.actions
export type RootState = ReturnType<typeof store.getState>
export const selectCurrentPage = (state: RootState) => {
    return state.app.currentPage
}
export const selectPerPage = (state: RootState) => {
    return state.app.perPage
}
export const selectAuthor = (state: RootState) => state.app.author
export const selectBlogId = (state: RootState) => state.app.blogId
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export default appStore.reducer