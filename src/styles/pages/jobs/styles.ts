import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: 0 10px;

  h1 {
    font-family: 'Ubuntu Condensed';
    color: var(--color-white);
    margin: 20px 0 30px;
  }

  > ul {
    list-style-type: none;

    li {
      width: 100%;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;

export const Job = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 36px;
  margin: 0 auto;
  padding: 0;

  h2 {
    display: flex;
    align-items: center;

    font-family: 'Ubuntu Condensed';
    color: var(--color-primary);
    background-color: var(--color-gray);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 10px;
    /* height: 50px; */
  }

  h3 {
    display: flex;
    align-items: center;
    font-family: 'Ubuntu Condensed';
    padding-left: 10px;
    padding-right: 10px;
    background-color: var(--color-primary-light-1);
    /* height: 50px; */
  }

  span {
    font-family: 'Ubuntu Condensed';
    color: var(--color-primary);
    background-color: var(--color-gray);
    
    font-size: 18px;
    padding-left: 12px;
  }

  span.description {
    font-family: 'Ubuntu Condensed';
    padding-left: 30px;
    padding-right: 10px;
    background-color: var(--color-primary-light-1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.5;
    
  }

  p {
    font-family: 'Ubuntu Condensed';
    font-size: 20px;
  }

  strong {
    font-family: 'Ubuntu Condensed';
    font-size: 20px;
  }
`;