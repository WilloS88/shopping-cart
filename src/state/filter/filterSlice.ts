import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  weaponType: string;
  caliber: string;
};

const initialState: FilterState = {
  weaponType: "",
  caliber: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setWeaponType: (state, action: PayloadAction<string>) => {
      state.weaponType = action.payload;
    },
    setCaliber: (state, action: PayloadAction<string>) => {
      state.caliber = action.payload;
    },
  },
});

export const { setWeaponType, setCaliber } = filterSlice.actions;

export default filterSlice.reducer;
