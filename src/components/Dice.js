import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { diceValue, resetValue } from '../redux/reducers/diceReducer';
import {getShape, resetShape} from '../redux/reducers/playReducer'



const Dice = () => {
  const dispatch = useDispatch()
  const [dice, setDice] = useState(0);
  const [reset , setReset] = useState(false)
  const [dplay, setDplay] = useState(false)

  const piece = useSelector(state => state.piece)
  const diceState = useSelector(state => state.dice)

  const checkNumber = (num) => {
    if (num === 0) {
      return num + 1
    } 
    return num
  }

  const diceRoll = async () => {
      let diceNumber = checkNumber(Math.floor(Math.random() * 7));
      dispatch(diceValue(diceNumber))
      setDice(diceNumber)
      setReset(true)
      setDplay(true)
    }
    
    const handleReset = () => {
      dispatch(
        resetValue()
        );
      dispatch(resetShape())
        setDice(0);
        setReset(false)
        setDplay(false)
      }
      
      const handlePlay =  () => {
        
        const selected = Object.keys(diceState);
        const sel = selected.find((e) => diceState[e] === true);
        const p = piece[sel]
        dispatch(getShape(p));
        setDplay(false)
  }

  return (
    <>
      <div className=" h-full">
        <div className="text-4xl border-4 border-gray-700 w-32 h-32 flex justify-center items-center text-blue-500">
          <p>{dice}</p>
        </div>
        <div className='flex flex-col sm:flex-row'>
        <button
          onClick={diceRoll}
          className={`px-2 ${!reset && "bg-blue-400"} border-2 rounded`}
          disabled={reset}
        >
          Role Dice
        </button>
        <button
          disabled={!reset}
          onClick={handleReset}
          className={`px-2 ${reset && "bg-red-300"} border-2 rounded`}
        >
          Reset
        </button>
        {dplay && (
          <button
            onClick={handlePlay}
            className="border-2 px-2 rounded bg-green-300"
          >
            Play
          </button>
        )}
        </div>
      </div>
    </>
  );
}

export default Dice
