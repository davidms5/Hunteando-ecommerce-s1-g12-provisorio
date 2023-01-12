import { createSlice } from '@reduxjs/toolkit';

const textsSlice = createSlice({
  name: 'texts',
  initialState: {
    texts: {
      acercaDe: {
        id: 1,
        TITULO: 'Acerca de',
        TEXTO:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos nam sapiente corporis dolorum. Error excepturi esse incidunt, dolores dolor facilis delectus, qui similique sapiente itaque nobis culpa, repellat nisi!',
      },
      talleres: {
        id: 2,
        TITULO: 'Talleres',
        TEXTO:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dignissimos nam sapiente corporis dolorum. Error excepturi esse incidunt, dolores dolor facilis delectus, qui similique sapiente itaque nobis culpa, repellat nisi!',
      },
    },
  },
  reducers: {
    setTexts: (state, action) => {
      state.texts = action.payload.texts;
    },
  },
});
export const { setTexts } = textsSlice.actions;

export default textsSlice.reducer;
