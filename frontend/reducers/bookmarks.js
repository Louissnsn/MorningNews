import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addArticleToFav: (state, action) => {
      state.value.push(action.payload);
    },
    removeArticleFromFav: (state, action) => {
      state.value.splice(action.payload);
    },
  },
});

export const { addArticleToFav, removeArticleFromFav } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
