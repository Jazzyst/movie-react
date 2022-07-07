import { composeWithDevTools } from 'redux-devtools-extension'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./movies";
import  thunk from 'redux-thunk';

export  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));