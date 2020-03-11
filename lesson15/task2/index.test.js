import { createCalculator } from './index'

it('should return result', () => {
    const calculator = createCalculator();
    let result = calculator.getMemo();

    expect(result).toEqual(0);
});

it('should return sum', () => {
    const calculator = createCalculator();
    calculator.add(25)
    let result = calculator.getMemo();

    expect(result).toEqual(25);
});

it('should return decrease', () => {
    const calculator = createCalculator();
    calculator.decrease(20)
    let result = calculator.getMemo();

    expect(result).toEqual(-20);
});
it('should return reset calculator', () => {
    const calculator = createCalculator();
    calculator.reset()
    let result = calculator.getMemo();

    expect(result).toEqual(0);
});