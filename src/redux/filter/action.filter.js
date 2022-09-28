import { createAction } from "@reduxjs/toolkit";
import { FILTER_CONTACTS } from "./types.filter";

export const filterContactsAction = createAction(FILTER_CONTACTS);
