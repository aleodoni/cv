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
    list-style-type: none;

    li {
      width: 100%;
      color: var(--color-white);
      font-size: 20px;
      font-family: 'Ubuntu Condensed';
    }
  }
`;

export const Course = styled.div`
  display: flex;
  flex-direction: column;

  line-height: 36px;
  /* margin-bottom: 40px; */
  width: 100%;

  h2 {
    display: flex;
    align-items: center;

    width: 100%;
    font-family: 'Ubuntu Condensed';
    color: var(--color-primary);
    background-color: var(--color-gray);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
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
    padding-top: 12px;
    padding-left: 12px;
    padding-right: 10px;
    background-color: var(--color-primary-light-1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    opacity: 0.5;
  }
`;