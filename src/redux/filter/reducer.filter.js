import { createReducer } from "@reduxjs/toolkit";
import { filterContactsAction } from "./action.filter";


export const initialFilter = '';

const filterReducer = createReducer(initialFilter,{
  [filterContactsAction]: (state, {payload}) => payload,

})

export default filterReducer;
