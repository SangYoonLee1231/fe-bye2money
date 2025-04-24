import { EntriesAction, EntriesState } from "./entriesTypes";

export const entriesReducer = (
  state: EntriesState,
  action: EntriesAction
): EntriesState => {
  switch (action.type) {
    case "SET_ENTRIES":
      return action.payload;
    case "ADD":
      return [...state, action.payload];
    case "UPDATE":
      return state.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    case "REMOVE":
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
};
