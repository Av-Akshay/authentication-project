import reducer from "./slice";
import { configureStore } from "@reduxjs/toolkit";
// import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)


  const store = configureStore({
    reducer: persistedReducer,
    middleware:(GetDefaultMiddleware)=>
    GetDefaultMiddleware({
      serializableCheck:{
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
  });
    let persistor = persistStore(store)
  export {store, persistor}

// const store = configureStore({
//     reducer:{
//         authReducer: reducer
//     }
// })

// export default store;
