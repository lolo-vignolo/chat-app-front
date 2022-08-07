import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { chatReducer } from '../reducers/chatReducer';
import { socketReducer } from '../reducers/socketReducer';

const reducers = combineReducers({
  auth: authReducer,
  socket: socketReducer,
  chat: chatReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
