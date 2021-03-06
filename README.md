# RomanNumeralsConverter
Simple utility function that converts from Roman Numerals to Arabic Numerals and vice-versa

## Setup
Clone the repo with the command
`git clone https://github.com/bodunadebiyi/RomanNumeralsConverter`

Then install dependencies with the command
`yarn install`

## Example
```js
const RomanNumerals = require('./RomanNumerals')

console.log(RomanNumerals.toRoman(400))
// returns CD
console.log(RomanNumerals.toRoman(491))
// return CDXCI

console.log(RomanNumerals.fromRoman('CD'))
// returns 400
console.log(RomanNumerals.fromRoman('CDXCI'))
// return 491
```

## Constraints
- Input value to toRoman function must be an integer
- Input value to toRoman function must be between 1 - 3999
- Input value to fromRoman function must be a valid roman numeral
 
## Test
`yarn test`
