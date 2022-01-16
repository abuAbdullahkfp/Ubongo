import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  shape: []
}

const playReducer = createSlice({
  name: 'play',
  initialState,
  reducers: {
    getShape (state, {payload}) {
      state.shape.push(...payload)
    },
    resetShape(state) {
      state.shape = []
    }
  }
})

export default playReducer.reducer
export const {getShape, resetShape} = playReducer.actions