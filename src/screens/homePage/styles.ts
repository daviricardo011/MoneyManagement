import styled from "styled-components";

export const Container = styled.div`
	display: flex;
  column-gap: 10px;
  row-gap: 20px;
  width: 100%;
  align-items: center !important;
  justify-content: center !important;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;