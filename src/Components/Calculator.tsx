import React from 'react';
import styled from 'styled-components'
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

  return <Container>
      <Grid>
          <Display>42</Display>
          <Button label='AC' position={[0, 1]} width={2} />
          <Button label='Oops' position={[2, 1]} width={2} />
          <Button label='-' position={[3, 2]} />
          <Button label='+' position={[3, 3]} />
          <Button label='=' position={[3, 4]} height={2} />
          <Button label='0' position={[0, 5]} width={3} type={ButtonType.Number} />
          <Button type={ButtonType.Number} label='9' />
          <Button type={ButtonType.Number} label='8' />
          <Button type={ButtonType.Number} label='7' />
          <Button type={ButtonType.Number} label='6' />
          <Button type={ButtonType.Number} label='5' />
          <Button type={ButtonType.Number} label='4' />
          <Button type={ButtonType.Number} label='3' />
          <Button type={ButtonType.Number} label='2' />
          <Button type={ButtonType.Number} label='1' />
      </Grid>
  </Container>;
};

export default Calculator;
