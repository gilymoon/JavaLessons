import {getSum} from './index.js';

it('should get sum of numbers if argument % 2 === 0' , () => {
    const result = getSum(2, 2);

    expect(result).toEqual(4);
})
