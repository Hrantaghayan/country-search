import { combineReducers, createStore } from "redux";
import { isGreen1, isGreen1Reducer } from "./green1";
import { isGreen2,isGreen2Reducer } from "./green2";
import { isGreen3, isGreen3Reducer} from "./green3";
import { inp1Val,inp1ValReducer } from "./inp1value";
import { inp2Val, inp2ValReducer} from "./inp2value";
import { inp3Val, inp3ValReducer} from "./inp3value";
import { continent, continentReducer} from "./continent";
import { cursor, cursorReducer } from "./cursor";
import { FullName,fullNmaeReducer } from "./FullName";
import { cursor1, cursor1Reducer} from "./cursor1";
import { countryCode, countryCodeReducer } from "./CountryCode";
import { cursor2, cursor2Reducer} from "./cursor2";
import { info, infoReducer} from "./info";
import { error, errorReducer} from "./eror";

const state = {
    isGreen1,
    isGreen2,
    isGreen3,
    inp1Val,
    inp2Val,
    inp3Val,
    continent,
    cursor,
    FullName,
    cursor1,
    countryCode,
    cursor2,
    info,
    error
}; 
export const store = createStore(combineReducers({
    isGreen1:isGreen1Reducer,
    isGreen2:isGreen2Reducer,
    isGreen3:isGreen3Reducer,
    inp1Val:inp1ValReducer,
    inp2Val:inp2ValReducer,
    inp3Val:inp3ValReducer,
    continent:continentReducer,
    cursor:cursorReducer,
    FullName:fullNmaeReducer,
    cursor1:cursor1Reducer,
    countryCode:countryCodeReducer,
    cursor2:cursor2Reducer,
    info:infoReducer,
    error:errorReducer
}),state)
