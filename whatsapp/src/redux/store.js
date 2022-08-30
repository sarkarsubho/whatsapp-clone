import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reduser as authReduser} from "./auth/reduser"

const rootReduser=combineReducers({
    auth:authReduser
})

export const store = legacy_createStore(rootReduser,applyMiddleware(thunk)); 