import { createSlice } from '@reduxjs/toolkit';

const textsSlice = createSlice({
  name: 'texts',
  initialState: {
    texts: [
      {
        id: 1,
        title: 'Acerca de',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos nam sapiente corporis dolorum. Error excepturi esse incidunt, dolores dolor facilis delectus, qui similique sapiente itaque nobis culpa, repellat nisi!',
      },
      {
        id: 2,
        title: 'Acerca de',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos nam sapiente corporis dolorum. Error excepturi esse incidunt, dolores dolor facilis delectus, qui similique sapiente itaque nobis culpa, repellat nisi!',
      },
    ],
  },
  reducers: {
    setTexts: (state, action) => {
      state.texts = action.payload.texts;
    },
  },
});
export const { setTexts } = textsSlice.actions;

export default textsSlice.reducer;
