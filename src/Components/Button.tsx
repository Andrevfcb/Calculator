import React from 'react';
import styled from 'styled-components'

export enum ButtonType {
    Number,
    Operation
}

type Props = React.HTMLProps<HTMLButtonElement> & {
    label: string;
    position?: [x: number, y: number];
    width?: number;
    height?: number;
    buttonType?: ButtonType;
}

const StyledButton = styled.button`
    background: gray;
    color: white;
    border-radius: 8px;
    border: none;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ buttonType = ButtonType.Operation, label, position, width, height, onClick }) => {

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
    if(buttonType === ButtonType.Number) {
        styles.color = `black`;
        styles.background = `#e48900`;
    }

  return <StyledButton 
  style={styles}
  onClick={onClick}
  >
      {label}
  </StyledButton>;
};

export default Button;
