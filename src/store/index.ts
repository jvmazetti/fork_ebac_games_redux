import {
  combineReducers,
  configureStore as configStore,
  PreloadedState
} from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'

import api from '../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})
export function configureStore(preloadedState?: PreloadedState<RootState>) {
  return configStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => unknown[]) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
