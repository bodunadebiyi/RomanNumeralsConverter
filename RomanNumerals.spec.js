const RomanNumerals = require('./RomanNumerals');

describe('RomanNumerals', () => {
  describe('toRoman', () => {
    describe('when input value is not an integer', () => {
      it('throws error with message "value should be integer', () => {
        expect(() => {
          RomanNumerals.toRoman('ppp');
        }).toThrow(new Error("value should be an integer"));
      });
    });

    describe('when input value is greater than 3999', () => {
      it('throws error with message "value should be less than 4000"', () => {
        expect(() => {
          RomanNumerals.toRoman(4500);
        }).toThrow(new Error('value should be less than 4000'));
      });
    });

    describe('when a valid arabic numeral is 491', () => {
      it('returns "CDXCI"', () => {
        expect(RomanNumerals.toRoman(491)).toEqual("CDXCI");
      });
    });

    describe('when a valid arabic numeral is 364', () => {
      it('returns "CDXCI"', () => {
        expect(RomanNumerals.toRoman(364)).toEqual("CCCLXIV");
      });
    });

    describe('when a valid arabic numeral is 799', () => {
      it('returns "DCCXCIX"', () => {
        expect(RomanNumerals.toRoman(799)).toEqual("DCCXCIX");
      });
    });

    describe('when a valid arabic numeral is 2214', () => {
      it('returns "MMCCXIV"', () => {
        expect(RomanNumerals.toRoman(2214)).toEqual("MMCCXIV");
      });
    });

    describe('when a valid arabic numeral is 2999', () => {
      it('returns "MMMCMXCIX"', () => {
        expect(RomanNumerals.toRoman(2999)).toEqual("MMCMXCIX");
      });
    });
  });

  describe('fromRoman', () => {
    describe('when input is an invalid roman numeral', () => {
      it('throws error with message "value should be integer', () => {
        expect(() => {
          RomanNumerals.fromRoman('MCMJ');
        }).toThrow(new Error("invalid roman numeral:  MCMJ"));
      });
    });

    describe('when roman numeral is CDXCI', () => {
      it('returns "491"', () => {
        expect(RomanNumerals.fromRoman('CDXCI')).toEqual(491);
      });
    });

    describe('when roman numeral is CCCLXIV', () => {
      it('returns "364"', () => {
        expect(RomanNumerals.fromRoman('CCCLXIV')).toEqual(364);
      });
    });

    describe('when romam numeral is DCCXCIX', () => {
      it('returns "799"', () => {
        expect(RomanNumerals.fromRoman('DCCXCIX')).toEqual(799);
      });
    });

    describe('when roman numeral is MMCCXIV', () => {
      it('returns "2214"', () => {
        expect(RomanNumerals.fromRoman('MMCCXIV')).toEqual(2214);
      });
    });

    describe('when roman numeral is MMCMXCIX', () => {
      it('returns "2999"', () => {
        expect(RomanNumerals.fromRoman('MMCMXCIX')).toEqual(2999);
      });
    });
  });
});