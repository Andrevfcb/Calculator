import React from 'react';
import styled from 'styled-components'

export enum ButtonType {
    Number,
    Operation
}

type Props = {
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
    type?: ButtonType;
}

const StyledButton = styled.button`
    background: gray;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ type = ButtonType.Operation, label, position, width, height }) => {

    const styles: React.CSSProperties = {};
    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }
    if(width) {
        styles.gridColumnEnd = `span ${width}`
    }
    if(height) {
        styles.gridRowEnd = `span ${height}`
    }
    if(type === ButtonType.Number) {
        styles.color = `black`;
        styles.background = `#e48900`;
    }

  return <StyledButton style={styles}>
      {label}
  </StyledButton>;
};

export default Button;
