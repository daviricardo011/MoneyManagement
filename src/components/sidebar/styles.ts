import styled from "styled-components";

export const SideMenuContainer = styled.div`
    box-shadow: 5px 0px 9px 1px rgba(0, 0, 0, 0.35);
    
    div {
        display: flex;
        flex-direction: column;
    }

    .links {
        padding-top: 120px;
        position: absolute;
        top: 0;
        left: 50px;
        z-index: 4;
        display: none;


        background-color: ${props => `${props.theme.colors.darkGreen}`};
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
                    height: 42px;
                }
            }
        }
    }

    .icons {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        background-color: ${props => `${props.theme.colors.darkGreen}`};
        box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
        height: 100%;
        width: 50px;
        padding-top: 115px;

        .icon {
            position: relative;
            align-items: center;
            padding: 6px 0 6px 0;
            font-size: 25px;
            color: ${props => `${props.theme.colors.white}`};
            cursor: pointer;

            .actualPage {
                position: absolute;
                left: 0;
                top: 0;
                background-color: ${props => `${props.theme.colors.white}`};
                width: 5px;
                height: 42px;
            }
        }
    }

    .links:hover,
    .icons:hover + .links {
      display: block;
    }
`;