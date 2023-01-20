import styled from "styled-components";

interface messageType {
  type: string;
}

export const CardContainer = styled.div`
	width: 412px;
  height: 348px;
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.green};
`

export const Caption = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.black};
`

export const TitleDiv = styled.div`
  text-align: center;
`;

export const Resume = styled.div`
  display: flex;
  justify-content: space-between;

  .earnings,
  .icon,
  .spending {
    display: flex;
    align-items: center;
  }
  .icon {
    justify-content: center;
    border-radius: 50px;
    width: 46px;
    height: 46px;

    img {
      width: 26px;
      height: 26px;
    }
  }
  .earnings {
    flex-direction: row-reverse;
    text-align: left;

    .icon {
      margin-left: 10px;
      background-color: ${props => props.theme.colors.green};
    }
  }
  .spending {
    text-align: right;
    h3 {
      color: ${props => props.theme.colors.red};
    }
    .icon {
      margin-right: 10px;
      background-color: ${props => props.theme.colors.red};
    }
  }
  .line {
    background-color: ${props => props.theme.colors.greyLine};
    height: 64px;
    width: 1px;
    margin: 50px 0;
  }
`;

export const CardText = styled.div`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.greyText};
  margin: 0px 0 30px 0;
`;

export const CardMessage = styled.div<messageType>`
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => (props.type === 'green' ? props.theme.colors.green : props.type === 'red' ? props.theme.colors.red : props.theme.colors.yellow)};
`;