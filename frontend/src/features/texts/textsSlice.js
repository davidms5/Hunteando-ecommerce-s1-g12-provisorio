import { createSlice } from '@reduxjs/toolkit';

const textsSlice = createSlice({
  name: 'texts',
  initialState: {
    texts: [],
  },
  reducers: {
    setTexts: (state, action) => {
      state.texts = action.payload.texts;
    },
  },
});
export const { setTexts } = textsSlice.actions;

export default textsSlice.reducer;
