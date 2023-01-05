import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
	padding: 10px 0;
  width: 100% !important;
  label {
    font-size: 14px;
    padding-bottom: 4px;
    margin: 0;
  };

  input {
    border: solid 2px ${props => `${props.theme.colors.green }`};
    border-radius: 3px;
    padding: 5px 10px 5px 10px;
  };
`;