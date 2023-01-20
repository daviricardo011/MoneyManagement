import styled from "styled-components";

interface messageType {
  type: string;
}

export const CardContainer = styled.div`
	width: 50%;
  height: 348px;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};

  @media (max-width: 1024px) {
    height: fit-content;
    width: 100%;
    padding: 20px 15px;
  }
  @media (max-width: 424px) {
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.title};
  color: ${props => props.theme.colors.green};

  @media (max-width: 767px) {
    font-size: ${props => props.theme.fontSizes.text};
  }
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
  justify-content: center;
  max-width: 100%;
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
    
    
    @media (max-width: 767px) {
      font-size: ${props => props.theme.fontSizes.text};
      
      width: 36px;
      height: 36px;
      
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
  .earnings {
    flex-direction: row-reverse;
    text-align: left;
    
    .icon {
      margin-left: 10px;
      background-color: ${props => props.theme.colors.green};
      @media (max-width: 320px) {
        margin: 0;
      }
    }

    @media (max-width: 424px) {
      flex-direction: column;
      text-align: center;
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
      
      @media (max-width: 320px) {
        margin: 10px 0 0 0;
      }
    }
    @media (max-width: 424px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .line {
    background-color: ${props => props.theme.colors.greyLine};
    height: 64px;
    width: 1px;
    margin: 50px 20px;

    @media (max-width: 1024px) {
      margin: 30px 20px;
    }
    @media (max-width: 424px) {
      margin: 0px 20px;
    }
    @media (max-width: 320px) {
      display: none;
    }
  }

  @media (max-width: 424px) {
    margin: 15px 0;
  }
  
  @media (max-width: 320px) {
    flex-direction: column;
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