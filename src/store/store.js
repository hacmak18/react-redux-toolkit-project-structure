import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    immutableCheck: false,
    serializableCheck: false,
  }),
});
export const persistor = persistStore(store);
export default store;