import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  one: [5,4,2,4],
  two: [3,3,4,5],
  three: [2,5,5,3],
  four: [4,4,4,3],
  five: [5,4,3,4],
  six: [4,2,5,4]
}

const pieceReducer = createSlice({
  name: 'piece',
  initialState,
})

export default pieceReducer.reducer
