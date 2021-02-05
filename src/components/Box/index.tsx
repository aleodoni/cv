import React from 'react';

import { Container } from './styles';

interface IProps {
  width: number;
}

const Box: React.FC<IProps> = ({ children, width }) => {
  return (
    <Container width={width}>
      {children}
    </Container>
  )
}

export default Box;