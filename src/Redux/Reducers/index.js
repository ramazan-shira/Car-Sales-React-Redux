import { combineReducers } from "@reduxjs/toolkit";
import { carsReducer } from "./carReducer";

const rootReducer = combineReducers({ cars: carsReducer });
export default rootReducer;
