import ShapeContent from './ShapeContent'
import { useSelector } from 'react-redux';
import shapeOne from "../images/shapeone.png";
import shapeTwo from "../images/shapetwo.png";
import shapeThree from "../images/shapethree.png";
import shapeFour from "../images/shapefour.png";
import shapeFive from "../images/shapefive.png";
import shapeSix from "../images/shapesix.png";
import shapeSeven from "../images/shapeseven.png";
import shapeEight from "../images/shapeeight.png";
import shapeNine from "../images/shapenine.png";
import shapeTen from "../images/shapeten.png";
import shapeEleven from "../images/shapeeleven.png";
import shapeTwelve from "../images/shapetwelve.png";

const Shapes = () => {
  const data = useSelector(state => state.dice)
 
return (
    <div>
      <ShapeContent
        flash={`${data.one ? "border-red-700 border-8" : "border-gray-700"}`}
        shape = {[shapeOne, shapeTwo, shapeThree, shapeFour]}
      />
      <ShapeContent
        flash={`${data.two ? "border-red-700 border-8" : "border-gray-700"}`}
        shape={[shapeFive, shapeSix, shapeTwo, shapeSeven]}
      />
      <ShapeContent
        flash={`${data.three ? "border-red-700 border-8" : "border-gray-700"}`}
        shape={[shapeThree, shapeEight, shapeNine, shapeFive]}
      />
      <ShapeContent
        flash={`${data.four ? "border-red-700 border-8" : "border-gray-700"}`}
        shape={[shapeTen, shapeTwo, shapeEleven, shapeSix]}
      />
      <ShapeContent
        flash={`${data.five ? "border-red-700 border-8" : "border-gray-700"}`}
        shape={[shapeOne, shapeTen, shapeThree, shapeEleven]}
      />
      <ShapeContent
        flash={`${data.six ? "border-red-600 border-8" : "border-gray-700"}`}
        shape={[shapeTwelve, shapeThree, shapeNine, shapeTen]}
      />
    </div>
  );
}

export default Shapes
