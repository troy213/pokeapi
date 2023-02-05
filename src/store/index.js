import { configureStore } from '@reduxjs/toolkit'
import pokemonSlice from './pokemon-slice'
import pokemonDetailSlice from './pokemon-detail-slice'

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
    pokemonDetail: pokemonDetailSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store
