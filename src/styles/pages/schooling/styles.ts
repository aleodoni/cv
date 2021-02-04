import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  > h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0 30px;
  }

  > ul {
    list-style-type: none;

    > li {
      margin-left: 20px;
      margin-bottom: 20px;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;

export const School = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 36px;
  margin-bottom: 40px;

  h2 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
  }

  h3 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
  }

  span {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    font-size: 18px;
  }
`;