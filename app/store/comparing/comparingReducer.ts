import { PokemonDetail } from "@/app/types";
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

interface ComparingState {
  comparePokemon?: PokemonDetail;
}

const initialState: ComparingState = {
  comparePokemon: undefined,
};

const comparingSlice: Slice<ComparingState> = createSlice({
  name: "comparing",
  initialState,
  reducers: {
    addtoCompare: (state, action: PayloadAction<PokemonDetail | undefined>) => {
      state.comparePokemon = action.payload;
    },
  },
});

export const { addtoCompare } = comparingSlice.actions;
export default comparingSlice.reducer;
