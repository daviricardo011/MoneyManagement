import styled from "styled-components";

export const CardContainer = styled.div`
	width: 100%;
  height: 348px;
  padding: 20px 40px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  color: ${props => props.theme.colors.black};
  @media (max-width: 1024px) {
    height: 400px;
    padding: 20px 15px;
  }
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.title};
  text-align: left;

  @media (max-width: 767px) {
    font-size: ${props => props.theme.fontSizes.text};
  }
`

export const Content = styled.div`
  margin-top: 20px;
  max-height: 275px;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    max-height: 345px;
  }
`;

export const Record = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 5fr 1fr;
  column-gap: 15px;
  border-top: 1px solid ${props => props.theme.colors.greyLine};
  padding: 10px 23px;
  align-items: center;

  .categoryIcon {
    width: 30px;
    height: 30px;

    @media (max-width: 767px) {
      font-size: ${props => props.theme.fontSizes.text};
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .categoryAndDescription {
    >:first-child {
      font-weight: ${props => props.theme.fontWeights.bold};
      font-size: ${props => props.theme.fontSizes.text};

      @media (max-width: 767px) {
        /* font-size: ${props => props.theme.fontSizes.subtitle}; */
      }
    }
  }
  .categoryAndDescription>:last-child,
  .dateAndValue {
    font-size: ${props => props.theme.fontSizes.subtitle};
  }

  @media (max-width: 767px) {
    padding: 10px 0px;
  }
`;