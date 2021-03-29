import {combineeReducers} from "redux";
import products from "./products";
import shops from "./shops";
import orders from "./orders";
import comments from "./comments";

const rootReducer = combineeReducers({
    products,shops,orders,comments
})
