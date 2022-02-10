export enum InputType {
    Numerical,
    Operation
}

export enum OperationType {
    Add = 'add',
    Substract = 'substract',
    Equals = 'equals'
}

export type CalcInput = 
| { type: InputType.Numerical, value: number } | { type: InputType.Operation, operation: OperationType }

export type CalcState = {
    displayValue: number
}

export type Operation = {
    operator: OperationType,
    value: number;
}

export type OperationsBuilder = {
    operations: Operation[],
    working: Operation;
}

const getOperationsBuilder = (inputs: Array<CalcInput>): OperationsBuilder => {
    return inputs.reduce<OperationsBuilder>((builder, input) => {
        switch(input.type) {
            case InputType.Numerical:
                const prevValue = builder.working?.value || 0;
                
                const newValue = prevValue * 10 + input.value;
                return {
                    ...builder, 
                    working: {
                        ...builder.working,
                        value: newValue }
                    };
            case InputType.Operation:
                if(input.operation === OperationType.Equals) {
                    return { 
                        operations: [
                            ...builder.operations, 
                            builder.working,
                            { 
                                operator: OperationType.Equals, 
                                value: 0 }
                        ],
                    working: {
                        operator: OperationType.Equals, 
                        value: 0 }
                    }
                } else {
                    return { 
                        operations: [
                            ...builder.operations, 
                            builder.working 
                        ],
                    working: { operator: 
                        input.operation, 
                        value: 0 }
                    }
                }   
        }
    }, {
        operations: [], 
        working: { 
            operator: OperationType.Add, value: 0 
        }
    }
        );
}

const getTotal = (operations: Array<Operation>): number => 
    operations.reduce<number>((sum, operation) => {
        switch(operation.operator) {
            case OperationType.Add:
                return sum + operation.value;
            case OperationType.Substract:
                return sum - operation.value;
            case OperationType.Equals:
                return sum;
        }
    }, 0)


const getState = (inputs: Array<CalcInput>): CalcState => {
    const builder = getOperationsBuilder(inputs)
    const { operations } = builder;
    const lastOperation = operations.length ? operations[operations.length - 1] : null;
    if (!lastOperation) {
        return {
            displayValue: builder.working.value
        }
    }
    const lastInput = inputs.length ? inputs[inputs.length - 1] : null;
    const total = getTotal(operations)

    switch(lastOperation.operator) {
        case OperationType.Equals:
            return {displayValue: total};
        
        default:
            return {displayValue: lastInput && lastInput.type === InputType.Numerical ? builder.working.value : total}
    } 
}

const Calc = {
    getOperationsBuilder,
    getState
}

export default Calc