import Calc, { InputType, OperationType, CalcInput, Operation } from "./calc";

test('generate operations', () => {

    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
        { type: InputType.Numerical, value: 3},
        { type: InputType.Operation, operation: OperationType.Equals}
    ]

    const operations: Operation[] = [
        { 
            operator: OperationType.Add,
            value: 12
        },
        { 
            operator: OperationType.Add,
            value: 3
        },
        { 
            operator: OperationType.Equals,
            value: 0
        }
    ]
    expect(Calc.getOperationsBuilder(inputs).operations).toEqual(operations);
});

test('has displayValue of 0 with no inputs', () => {
    const inputs: Array<CalcInput> = []
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(0);
});

test('has displayValue of 1', () => {
    const inputs: Array<CalcInput> = [{ type: InputType.Numerical, value: 1}]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(1);
});

test('derives displayValue upon new numerical input', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
        { type: InputType.Numerical, value: 3}
        
    ]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(3);
});

test('derives displayValue upon operator input', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
    ]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(12);
});

test('derives displayValue after equal', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
        { type: InputType.Numerical, value: 3},
        { type: InputType.Operation, operation: OperationType.Equals},
        { type: InputType.Numerical, value: 3}
    ]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(3);
});

test('derives final state', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
        { type: InputType.Numerical, value: 3},
        { type: InputType.Operation, operation: OperationType.Equals}
    ]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(15);
});

test('derives final state (with addition and substraction)', () => {
    const inputs: Array<CalcInput> = [
        { type: InputType.Numerical, value: 1},
        { type: InputType.Numerical, value: 2},
        { type: InputType.Operation, operation: OperationType.Add},
        { type: InputType.Numerical, value: 3},
        { type: InputType.Operation, operation: OperationType.Substract},
        { type: InputType.Numerical, value: 5},
        { type: InputType.Operation, operation: OperationType.Equals}
    ]
    const state = Calc.getState(inputs);
    expect(state.displayValue).toEqual(10);
});

