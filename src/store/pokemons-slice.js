import { createSlice } from '@reduxjs/toolkit'

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    loading: false,
    data: [],
    error: null,
  },
  reducers: {},
})

export const pokemonsAction = pokemonsSlice.actions

export default pokemonsSlice
