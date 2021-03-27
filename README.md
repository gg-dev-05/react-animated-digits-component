# REACT ANIMATED DIGITS COMPONENT

A react component to display digits in an animated way.

Check out the live demo of the component [here](https://react-animated-digits.netlify.app/)

## Installation

```
npm install react-animated-digits-component
```

You can import the component using

```jsx
import Digits from "react-animated-digits-component";
```

You can also import the type definitions if you're using TypeScript like so:

```jsx
import Digits, { DigitProps } from "react-animated-digits-component";
```

## Available props

|      Prop      |   Type   | Default  | Description                                                                                                         |
| :------------: | :------: | :------: | :------------------------------------------------------------------------------------------------------------------ |
| previousValue  | `number` | required | Initial value of the digit to start the animation from.                                                             |
|  currentValue  | `number` | required | Final value of the digit while ending animation.                                                                    |
| animationSpeed | `number` |   0.6    | Speed of animation in seconds                                                                                       |
|      size      | `number` |    24    | Size (width) of the whole digit in [rem](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/) units |
|   digitColor   | `string` | "black"  | Color of the visible digits. It can take values like #fff or rgb(0,0,0).                                            |
|  digitBorder   | `string` |    ""    | Sets the border property of the digit. It can take values like `1px solid #fff`                                     |
|  circleBorder  | `string` |    ""    | Sets the border property of the circles enclosing the rotating lines. It can take values like `1px solid #fff`      |

## Examples

```jsx

// your-component.js
import Digits from 'react-animated-digits-component'

function Example0(){
    return (
        <Digits previousValue={10} currentValue={200} digitColor={"green"} circleBorder={"2px solid pink"}>
    )
}


```

```jsx

// your-component.js
import Digits from 'react-animated-digits-component'

function Example1(){
    return (
        <Digits previousValue={10} currentValue={200} animationSpeed={1} digitColor={"rgb(0,0,0)"}>
    )
}


```
