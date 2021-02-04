import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  text-align: center;

  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: inline-block;

  min-height: 100vh;
  width: 100%;

  

  div.main {
    display: inline-block;
    text-align: justify;

    width: 100%;
    height: 100%;

    max-width: var(--max-width);

    width: 100%;

    div.section {
      display: inline-block;
      width: 100%;

      div.header {
        display: inline-block;
        width: 100%;
        text-align: center;

        > h1 {
            display: flex;
            flex: 1;
            align-items: center;
            justify-content:center;

            max-width: 50%;
            display: flex;
            border: 1px solid white;
            border-radius: 5px;
            font-family: 'Ubuntu Condensed';
            color: var(--color-white);
            margin: 0 auto;
            padding: 10px;
        }
      }

      div.image {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 20px;
        opacity: 0.5;
        
        > img {
          border-radius: 50%;
          width: 40%;
        }
      }

      b {
        color: var(--color-white);
        margin-bottom: 20px;
      }

    p {
      color: var(--color-white);
      margin-bottom: 20px;
    }
  }

  @media(max-width: 880px) {
    div.section {
      display: flex;
      flex: 1;
      flex-direction: column;

      div.header {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content:center;

      > h1 {
        display: flex;
        flex: 1;
        border: 1px solid var(--color-white);;
        margin: 0;
        border-radius: 5px;
        font-family: 'Ubuntu Condensed';
        font-size: 24px;
        color: var(--color-white);
      }
    }

    div.image {
      > img {
        border-radius: 50%;
        width: 70%;
      }
    }
  }
  }
}`;

export const Header = styled.div`
  display: inline-block;

  margin: 0 auto;
  width: 100%;
  text-align: center;

  .socialMedia {
    display: inline-block;
    vertical-align: middle;
    text-align: end;

    padding: 20px 0;

    max-width: var(--max-width);
    width: 100%;

    @media(max-width: 880px) {
      text-align: center;
    }

    
    /* padding: 20px 0; */

    svg {
      color: var(--color-gray);
      margin-left: 20px;
    }
  }

  .menu {
    display: inline-block;
    vertical-align: middle;

    width: 100%;
    min-height: 100%;
    padding: 20px 0; 

    > img {
      max-width: var(--max-width);
      width: 100%;
      border-radius: 5px;
      margin: 20px 0;
    }

    .logo {
      display: inline-block;
      vertical-align: middle;
      text-align: center;

      max-width: var(--max-width);
      width: 100%;
      /* height: 40px; */
      /* padding: 0 20px; */

      div.logoImg {
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        width: 50%;
        /* height: 100%; */

        > a {
          font-size: 16px;
          font-family: 'Ubuntu Condensed';
          color: var(--color-white);
          transition: opacity 0.4s;

          &:hover {
            color: var(--color-gray);
            /* opacity: 1; */
          }
        }
      }

      div.logoMenu {
        display: inline-block;
        width: 50%;
        /* height: 140px; */
        visibility: visible;

        > ul {
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* height: 100%; */
          
          visibility: visible;

          list-style-type: none;

          > li {
            visibility: visible;
            
            > a {
              font-size: 16px;
              font-family: 'Ubuntu Condensed';
              color: var(--color-white);
              transition: opacity 0.4s;

              &:hover {
                color: var(--color-gray);
                /* opacity: 1; */
              }
            }
          }
        }
      }

      @media(max-width: 880px) {
        div.logoMenu {
          visibility: hidden;
          > ul {
            visibility: hidden;

            > li {
              visibility: hidden;
            }
          }
        }
        div.logoImg {
          visibility: hidden;
        }
      }
    }
  }
`;

export const MenuMobile = styled.span`
  visibility: hidden;

  @media(max-width: 880px) {
    visibility: visible;
    display: inline-block;

    width: 92%;

    div.burguer {
      display: inline-block;
      text-align: end;

      width: 100%;
      height: 30px;

      &:hover {
        cursor: pointer;
        color: var(--color-yellow);
        opacity: 1;
      }
    }

    > ul {
      list-style-type: none;
      font-size: 20px;
      width: 92%;
      

      > li {
        margin-left: 30px;
        width: 100%;
        
        > a {
          display: inline-block;
          align-items: center;
          justify-content: center;

          color: var(--color-white);
          width: 100%;
          line-height: 40px;

          &:hover {
            color: var(--color-yellow);
            opacity: 1;
          }
        }
      }
    }
  }
`;