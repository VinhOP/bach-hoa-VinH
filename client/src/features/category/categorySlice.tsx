import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { IInitValue, ICategoriesState } from './types';

const initialState: IInitValue = {
    value: [],
    isLoading: false,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action: PayloadAction<ICategoriesState[]>) => {
            return { ...state, value: action.payload };
        },
        addCategory: (state, action: PayloadAction<ICategoriesState>) => {
            state.value.push(action.payload);
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setCategories, setIsLoading, addCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
