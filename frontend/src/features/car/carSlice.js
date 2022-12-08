import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "car",
  initialState: {
    car: [],
  },
  reducers: {
    addCar: (state, action) => {
      state.car.push(action.payload);
    },
  },
});

export const { addCar } = carSlice.actions;
export default carSlice.reducer;
