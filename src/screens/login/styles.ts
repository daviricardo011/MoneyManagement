import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => `${props.theme.colors.green}`};
  width: 100%;
  height: 100vh !important;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputsContainer = styled.div`
  display: grid;
  justify-content: center;

  background-color: ${props => `${props.theme.colors.white}`};
  max-width: 464px;
  height: 318px;
  padding: 32px 12px;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media (min-width: 768px) { 
    min-width: 364px;
  }
`;