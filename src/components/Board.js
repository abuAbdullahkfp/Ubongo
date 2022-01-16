import React from 'react'
import {useSelector} from 'react-redux'



const Board = () => {
  const {shape} = useSelector(state => state.play)
  const piece = useSelector(state => state.piece)


  let one,two, three, four, five, six, seven, eight, nine, ten , eleven, twelve, thirteen, fourteen, fifteen;

  
  if (shape.toString() === piece.one.toString()) {
    one = "bg-pink-500";
    two = "bg-pink-500";
    three = "bg-green-600";
    four = "bg-green-600";
    five = "bg-pink-500";
    six = "bg-purple-500";
    seven = "bg-purple-500";
    eight = "bg-green-600";
    nine = "bg-pink-500";
    ten = "bg-red-500";
    eleven = "bg-red-500";
    twelve = "bg-green-600";
    thirteen = "bg-pink-500";
    fourteen = "bg-red-500";
    fifteen = "bg-red-500";
  } else if (shape.toString() === piece.two.toString()) {
    one = "bg-orange-400";
    two = "bg-green-600";
    three = "bg-green-600";
    four = "bg-purple-400";
    five = "bg-orange-400";
    six = "bg-orange-400";
    seven = "bg-green-700";
    eight = "bg-purple-400";
    nine = "bg-orange-400";
    ten = "bg-blue-400";
    eleven = "bg-green-700";
    twelve = "bg-purple-400";
    thirteen = "bg-orange-400";
    fourteen = "bg-blue-400 ";
    fifteen = "bg-blue-400";
  } else if (shape.toString() === piece.three.toString()) {
    one = "bg-blue-400";
    two = "bg-blue-400";
    three = "bg-blue-400";
    four = "bg-green-600";
    five = "bg-gray-400";
    six = "bg-gray-400";
    seven = "bg-green-600";
    eight = "bg-green-600";
    nine = "bg-purple-400";
    ten = "bg-gray-400";
    eleven = "bg-green-600";
    twelve = "bg-green-600";
    thirteen = "bg-purple-400";
    fourteen = "bg-gray-400";
    fifteen = "bg-gray-400";
  } else if (shape.toString() === piece.four.toString()) {
    one = "bg-green-600";
    two = "bg-green-600";
    three = "bg-green-600";
    four = "bg-orange-400";
    five = "bg-green-600";
    six = "bg-yellow-400";
    seven = "bg-orange-400";
    eight = "bg-orange-400";
    nine = "bg-yellow-400";
    ten = "bg-yellow-400";
    eleven = "bg-blue-300";
    twelve = "bg-orange-400";
    thirteen = "bg-yellow-400";
    fourteen = "bg-blue-300";
    fifteen = "bg-blue-300";
  } else if (shape.toString() === piece.five.toString()) {
    one = "bg-green-600";
    two = "bg-green-600";
    three = "bg-blue-300";
    four = "bg-blue-300";
    five = "bg-green-600";
    six = "bg-yellow-400";
    seven = "bg-yellow-400";
    eight = "bg-blue-300";
    nine = "bg-green-600";
    ten = "bg-orange-400";
    eleven = "bg-yellow-400";
    twelve = "bg-yellow-400";
    thirteen = "bg-orange-400";
    fourteen = "bg-orange-400";
    fifteen = "bg-orange-400";
  } else if (shape.toString() === piece.six.toString()) {
    one = "bg-green-300";
    two = "bg-green-300";
    three = "bg-green-300";
    four = "bg-green-300";
    five = "bg-green-600";
    six = "bg-green-600";
    seven = "bg-green-600";
    eight = "bg-yellow-400";
    nine = "bg-green-600";
    ten = "bg-green-600";
    eleven = "bg-yellow-400";
    twelve = "bg-yellow-400";
    thirteen = "bg-purple-400";
    fourteen = "bg-purple-400";
    fifteen = "bg-yellow-400";
  }

  return (
    <div className="grid grid-cols-4 h-32 w-32">
      <div className={`border ${one} flex justify-center items-center`}></div>
      <div className={`border ${two} flex justify-center items-center`}></div>
      <div className={`border ${three} flex justify-center items-center`}></div>
      <div className={`border ${four} flex justify-center items-center`}></div>
      <div className={`border ${five} flex justify-center items-center`}></div>
      <div className={`border ${six} flex justify-center items-center`}></div>
      <div className={`border ${seven} flex justify-center items-center`}></div>
      <div className={`border ${eight} flex justify-center items-center`}></div>
      <div className={`border ${nine} flex justify-center items-center`}></div>
      <div className={`border ${ten} flex justify-center items-center`}></div>
      <div className={`border ${eleven} flex justify-center items-center`}></div>
      <div className={`border ${twelve} flex justify-center items-center`}></div>
      <div className={`border ${thirteen} flex justify-center items-center`}></div>
      <div className={`border ${fourteen} flex justify-center items-center`}></div>
      <div className={`border ${fifteen} flex justify-center items-center`}></div>
    </div>
  );
}

export default Board
