import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0 30px;
  }

  ul {
    list-style-type: circle;

    li {
      width: 100%;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;

export const Person = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 36px;
  width: 100%;

  > span {
    font-family: 'Ubuntu Condensed';
    font-size: 18;
    padding-left: 30px;
    padding-right: 10px;
    background-color: var(--color-primary-light-1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.5;

    &:first-child {
      padding-top: 20px;
    }
  }
`;