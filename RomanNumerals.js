const romanSymbolsToNumbersMapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const repeatValue = (value, times) => {
  let result = "";
  let i = 0;

  for (; i < times; i++) {
    result += value;
  }

  return result;
};

const getRomanNumeral = value => {
  let i = 0;
  const romanNumeralsBaseSymbols = Object.keys(romanSymbolsToNumbersMapping);
  const romanNumeralsBaseNumbers = romanNumeralsBaseSymbols.map(
    e => romanSymbolsToNumbersMapping[e]
  );

  for (; i < romanNumeralsBaseNumbers.length; i++) {
    if (value === romanNumeralsBaseNumbers[i]) {
      return romanNumeralsBaseSymbols[i];
    }

    if (i === romanNumeralsBaseNumbers.length - 1) {
      const multiples = value / romanNumeralsBaseNumbers[i];
      return repeatValue(romanNumeralsBaseSymbols[i], multiples);
    }

    const upperBound = romanNumeralsBaseNumbers[i + 1];
    const midBound = romanNumeralsBaseNumbers[i];
    const lowerBound = romanNumeralsBaseNumbers[i - 1];

    if (midBound < value && value < upperBound) {
      if (upperBound - midBound === value) {
        return romanNumeralsBaseSymbols[i] + romanNumeralsBaseSymbols[i + 1];
      } else if (upperBound - lowerBound === value) {
        return (
          romanNumeralsBaseSymbols[i - 1] + romanNumeralsBaseSymbols[i + 1]
        );
      } else if (value % midBound === 0) {
        return repeatValue(romanNumeralsBaseSymbols[i], value / midBound);
      } else {
        const difference = value - midBound;
        return romanNumeralsBaseSymbols[i] + getRomanNumeral(difference);
      }
    }
  }
};

const getRomanNumeralForEachValue = valueLength => (e, i) => {
  const value = +e * 10 ** (valueLength - i);
  return getRomanNumeral(value);
};

function toRoman(value) {
  if (!Number.isInteger(value)) {
    throw new Error("value should be an integer");
  }

  if (value > 3999) {
    throw new Error("value should be less than 4000");
  }

  const valueArray = `${value}`.split('');

  return valueArray
    .map(getRomanNumeralForEachValue(valueArray.length - 1))
    .join('');
}

function fromRoman(romanNumeral) {
  let arabicNumeral = 0;
  let i = 0;
  const romanNumeralsArray = romanNumeral.split("");

  for (; i < romanNumeralsArray.length; i++) {
    const currentRomanNumeral = romanNumeralsArray[i];
    const nextRomanNumeral = romanNumeralsArray[i + 1];
    const currentArabicNumeral = romanSymbolsToNumbersMapping[currentRomanNumeral];
    const nextArabicNumeral = romanSymbolsToNumbersMapping[nextRomanNumeral];

    if (!currentArabicNumeral) {
      throw Error("invalid roman numeral:  " + romanNumeral);
    }

    if (nextArabicNumeral > currentArabicNumeral) {
      arabicNumeral += nextArabicNumeral - currentArabicNumeral;
      i++;
    } else {
      arabicNumeral += currentArabicNumeral;
    }
  }

  return arabicNumeral;
}

module.exports = {
  toRoman,
  fromRoman
};
