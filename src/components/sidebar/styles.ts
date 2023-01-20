import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;

    .screenContent {
        background-color: ${props => props.theme.colors.greyBackground};
        padding: 40px 55px;
        width: 100vw;
        height: 100vh;
    }
`;

export const MainMenuContainer = styled.div`
    box-shadow: 5px 0px 9px 1px rgba(0, 0, 0, 0.35);
    width: 60px;
    div {
      display: flex;
      flex-direction: column;
    }

    .links {
      padding-top: 117px;
      position: fixed;
      top: 0;
      left: 60px;
      z-index: 4;
      display: none;


      background-color: ${props => `${props.theme.colors.green}`};
      max-width: 290px;
      height: 100vh;

      span {
        color: ${props => `${props.theme.colors.white}`};
      }


      .link {
        position: relative;
        padding: 15px 32px 12px 15px;
        cursor: pointer;

        :hover {
          .highlight {
              position: absolute;
              right: 0;
              top: 0;
              background-color: ${props => `${props.theme.colors.white}`};
              width: 5px;
              height: 49px;
          }
        }
      }
    }

    .icons {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      background-color: ${props => `${props.theme.colors.green}`};
      box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
      height: 100%;
      width: 60px;
      padding-top: 115px;

      .icon {
          position: relative;
          align-items: center;
          padding: 6px 0 6px 6px;
          font-size: 25px;
          color: ${props => `${props.theme.colors.white}`};
          cursor: pointer;
      }
    }

    
    .actualPage {
      background-color: ${props => `${props.theme.colors.darkGreen}`};
    }

    .links:hover,
    .icons:hover + .links {
      display: block;
    }

    @media (max-width: 768px) {
      display: none;
    }
`;