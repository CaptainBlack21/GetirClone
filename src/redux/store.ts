import { createStore,combineReducers,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import cartItems from "./reducers/CartItem";
const reducers=combineReducers({
//CartItems
cartItems:cartItems
})
const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;