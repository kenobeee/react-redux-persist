import {combineReducers} from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import JSOG from 'jsog';

import {newNodeReducer} from "./newNodeReducer";
import {treeReducer} from "./treeReducer";

import { createTransform } from 'redux-persist';

const JSOGTransform = createTransform(
  (inboundState, key) => JSOG.encode(inboundState),
  (outboundState, key) => JSOG.decode(outboundState),
)

const persistConfig = {
  key: 'root',
  storage,
  transforms: [JSOGTransform],
  whitelist: ['treeState'],
  blacklist: ['NewNodeState']
}

const rootReducer = combineReducers({
  NewNodeState: newNodeReducer,
  treeState: treeReducer,
});

export default persistReducer(persistConfig, rootReducer);