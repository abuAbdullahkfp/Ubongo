import {configureStore} from '@reduxjs/toolkit'
import diceReducer from './reducers/diceReducer'
import pieceReducer from './reducers/pieceReducer'
import playReducer from './reducers/playReducer'

const store = configureStore({
  reducer: {
    dice: diceReducer,
    piece: pieceReducer,
    play: playReducer
  },
  
})


export default store