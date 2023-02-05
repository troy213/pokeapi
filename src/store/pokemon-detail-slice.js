import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios'

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (arg) => {
    const { params } = arg
    const response = await axios.get(`/pokemon/${params.id}`)
    console.log(response)
    return response.data
  }
)

const pokemonDetailSlice = createSlice({
  name: 'pokemonDetail',
  initialState: {
    data: null,
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPokemonDetail.pending]: (state) => {
      state.isLoading = true
    },
    [fetchPokemonDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    [fetchPokemonDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.data = null
      state.error = action.error
    },
  },
})

export default pokemonDetailSlice.reducer
