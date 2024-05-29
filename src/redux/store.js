import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
const middleware = [];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
