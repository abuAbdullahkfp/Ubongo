import React from 'react'
import Dice from './components/Dice'
import Shapes from './components/Shapes'
import Board from './components/Board'

const App = () => {
  
  return (
    <>
    <div className='flex flex-col sm:flex-row items-center sm:justify-center gap-8'>
    <Dice />
    <Shapes />
    <Board />
    </div>
    </>
  )
}

export default App
