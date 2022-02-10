import React, { useState } from 'react';
import styled from 'styled-components'
import Calc, { CalcInput, InputType, OperationType } from '../modules/calc';
import Button, {ButtonType} from './Button';

const Container = styled.div`
    
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
    background: #fff;
    border-radius: 8px;
    font-size: 48px;
    grid-column-end: span 4;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Calculator: React.FC <{}> = () => {

    const [inputs, setInputs] = useState<Array<CalcInput>>([])
    const state = Calc.getState(inputs)

    const appendInput = (input: CalcInput): void => {
        setInputs((prev) => [...prev, input])
    }

    const handleNumerical = (value: number) => () => {
        appendInput( { type: InputType.Numerical, value })
    }

    const handleOperator = (operation: OperationType) => () => {
        appendInput({ type: InputType.Operation, operation })
    }

    const handleAllClear = () => setInputs([])

    const handleOops = () => setInputs(prev => prev.slice(0, -1))

  return <Container>
      <Grid>
          <Display>{state.displayValue}</Display>
          <Button label='AC' position={[0, 1]} width={2} onClick={handleAllClear} />
          <Button label='Oops' position={[2, 1]} width={2} onClick={handleOops} />
          <Button label='-' position={[3, 2]} onClick={handleOperator(OperationType.Substract)} />
          <Button label='+' position={[3, 3]} onClick={handleOperator(OperationType.Add)}  />
          <Button label='=' position={[3, 4]} height={2} onClick={handleOperator(OperationType.Equals)}  />
          <Button label='0' position={[0, 5]} width={3} buttonType={ButtonType.Number} onClick={handleNumerical(0)} />
          <Button buttonType={ButtonType.Number} label='9' onClick={handleNumerical(9)} />
          <Button buttonType={ButtonType.Number} label='8' onClick={handleNumerical(8)} />
          <Button buttonType={ButtonType.Number} label='7' onClick={handleNumerical(7)} />
          <Button buttonType={ButtonType.Number} label='6' onClick={handleNumerical(6)} />
          <Button buttonType={ButtonType.Number} label='5' onClick={handleNumerical(5)} />
          <Button buttonType={ButtonType.Number} label='4' onClick={handleNumerical(4)} />
          <Button buttonType={ButtonType.Number} label='3' onClick={handleNumerical(3)} />
          <Button buttonType={ButtonType.Number} label='2' onClick={handleNumerical(2)} />
          <Button buttonType={ButtonType.Number} label='1' onClick={handleNumerical(1)} />
      </Grid>
  </Container>;
};

export default Calculator;
