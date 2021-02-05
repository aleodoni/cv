import styled from 'styled-components';

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  /* text-align: center; */

  width: ${(props) => props.width}%;
  height: 100%;
  border: 1px solid var(--color-gray);
  border-radius: 10px;
  margin: 0 auto;
`;