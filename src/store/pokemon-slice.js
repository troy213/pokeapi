import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios'

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async (arg) => {
    const { offset, limit } = arg
    const response = await axios.get(
      `/pokemon/?offset=${offset ?? 0}&limit=${limit ?? 20}`
    )
    const urls = response.data.results.map((pokemon) => pokemon.url)
    const count = response.data.count
    const promises = urls.map(async (url) => {
      const response = await axios.get(url)
      return response.data
    })
    const results = await Promise.all(promises)
    const pageCount = Math.ceil(count / limit)

    return { count, results, pageCount }
  }
)

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    count: 0,
    pageCount: 0,
    data: [],
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPokemon.pending]: (state) => {
      state.isLoading = true
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload.results
      state.count = action.payload.count
      state.pageCount = action.payload.pageCount
    },
    [fetchPokemon.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
  },
})

export default pokemonSlice.reducer
