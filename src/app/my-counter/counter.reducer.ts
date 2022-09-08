import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
  initialState, 
  on(increment, (state) => {
    debugger;
    return state + 1;
  }),
  on(decrement, (state) => {
    debugger;
    return state - 1;
  }),
  on(reset, (state) => {
    debugger;
    return 0;
  })
);

