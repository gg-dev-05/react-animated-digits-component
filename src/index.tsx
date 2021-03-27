import React from 'react'
import Digit from './Digit/Digit'
import './Digits.scss'
import { v4 as uuidv4 } from 'uuid';

export type DigitProps = {
    previousValue: number,
    currentValue: number,
    size?: number,
    animationSpeed?: number,
    circleBorder?: string, 
    digitBorder?: string, 
    digitColor?: string
}

const defaults = {
    previousValue: 0,
    currentValue: 0,
    size: 24,
    animationSpeed: 0.6,
    circleBorder: "",
    digitBorder: "",
    digitColor: "black"
}

export const DigitContext = React.createContext(defaults)


const Digits: React.FC<DigitProps> = (props: DigitProps) => {
    const {
        previousValue=defaults.previousValue, 
        currentValue = defaults.currentValue, 
        size = defaults.size, 
        animationSpeed = defaults.animationSpeed, 
        circleBorder = defaults.circleBorder, 
        digitBorder = defaults.digitBorder, 
        digitColor = defaults.digitColor
    } = props;

    let previousValueAsString = String(previousValue)
    let currentValueAsString = String(currentValue)
    
    const lengthOfPreviousString = previousValueAsString.length;
    const lengthOfNewString = currentValueAsString.length;
    const diff = Math.abs(lengthOfPreviousString-lengthOfNewString);

    // Making both the strings of equal length
    if(lengthOfNewString < lengthOfPreviousString){
        currentValueAsString = "0".repeat(diff) + currentValueAsString;
    }
    else{
        previousValueAsString = "0".repeat(diff)+ previousValueAsString;
    }

    const lengthOfEqualStrings = previousValueAsString.length;
    const digits = []
    for(var i = 0; i < lengthOfEqualStrings; i++){
        digits.push(<Digit key={uuidv4()} previousDigit={parseInt(previousValueAsString[i])} currentDigit={parseInt(currentValueAsString[i])}/>)
    }

    return (
        <div className="digits">
        <DigitContext.Provider value={{previousValue, currentValue ,size, animationSpeed, circleBorder, digitBorder, digitColor}}>
            {digits}
        </DigitContext.Provider>
        </div>
    )
}

export default Digits;