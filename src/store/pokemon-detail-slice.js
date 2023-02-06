import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../api/axios'

export const fetchPokemonDetail = createAsyncThunk(
  'pokemon/fetchPokemonDetail',
  async (arg) => {
    const { params } = arg
    const response = await axios.get(`/pokemon/${params.id}`)
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
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonDetail.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchPokemonDetail.rejected, (state, action) => {
      state.isLoading = false
      state.data = null
      state.error = action.error
    })
  },
})

export default pokemonDetailSlice.reducer
