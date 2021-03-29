import {combineeReducers} from "redux";
import entities from "./entities";
import home from "./home";
import detail from "./detail";
import app from "./app";

const rootReducer = combineeReducers({
    entities,home,detail,app
})
