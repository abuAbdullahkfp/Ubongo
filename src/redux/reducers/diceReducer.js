import { createSlice } from "@reduxjs/toolkit";   

const diceReducer = createSlice({
  name: 'dice',
  initialState: {value: 0, one: false, two: false, three: false, four: false, five: false, six: false},
  reducers: {
    diceValue (state, {payload}) {
       state.value = payload
       if (payload === 1) {
         state.one = true;
       } else if (payload === 2) {
         state.two = true;
       } else if (payload === 3) {
         state.three = true;
       } else if (payload === 4) {
         state.four = true;
       } else if (payload === 5) {
         state.five = true;
       } else if (payload === 6) {
         state.six = true;
       }
    }, 
    resetValue (state, {payload}) {
      state.value = 0
      state.one = false
      state.two = false
      state.three = false
      state.four = false
      state.five = false
      state.six = false
    }
  }
})

export default diceReducer.reducer
export const {diceValue, resetValue} = diceReducer.actions