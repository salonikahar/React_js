import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from 'redux-thunk'
import EmpReducer from "./EmpReducer";
import { loadState, saveState } from '../utils/LocalStorage'

let allData = loadState();

const store = createStore(combineReducers({
    empData: EmpReducer
}),
    allData,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState(store.getState());
});
export default store;