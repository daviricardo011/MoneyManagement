import styled from "styled-components";

export const TitleContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 15px;

    .title {
        font-size: ${props => `${props.theme.fontSizes.title}`};
        font-weight: ${props => `${props.theme.fontWeights.bold }`};
        color: ${props => `${props.theme.colors.green }`};
    }
    .subtitle {
        font-size: ${props => `${props.theme.fontSizes.text}`};
        font-weight: ${props => `${props.theme.fontWeights.bold }`};
    }
`;