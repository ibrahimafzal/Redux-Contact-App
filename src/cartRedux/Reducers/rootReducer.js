import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
import {contactReducer} from './contactReducer'



const rootReducer = combineReducers({
    cartReducer, contactReducer
});

export default rootReducer;