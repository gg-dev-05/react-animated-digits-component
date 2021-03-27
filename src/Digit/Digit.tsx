import React, { useContext } from 'react'
import Circle from '../Circle/Circle'
import {output} from '../logic'
import {DigitContext} from '..'
import './Digit.scss'

import { v4 as uuidv4 } from 'uuid';

function Digit({previousDigit=0, currentDigit=0}) {

  const {size, digitBorder} = useContext(DigitContext)
  const currentDigitArray = output(currentDigit);
  const previousDigitArray = output(previousDigit);
  const circles = []
  for(var i = 0; i < 24; i++){
    circles.push(<Circle key={uuidv4()} bottom={[previousDigitArray[0][i], currentDigitArray[0][i]]} top={[previousDigitArray[1][i], currentDigitArray[1][i]]}/>)
  }
  return (
      <div className="digit_container" style={{width: `${size}rem`, border: `${digitBorder}`}}>
        {circles}        
      </div>
  );
}

export default Digit
