import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;

export const Input = styled.input`
  height: 2.3rem;
  padding: 0 1rem;
  font-family: inherit;
  font-size: inherit;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e3e3e3;
  border-radius: 0.83rem;
  margin-top: 1.1rem;

  ::placeholder {
    color: #e3e3e3;
  }

  :focus {
    outline: none;
  }
`;

export const Submit = styled.input`
  font-size: inherit;
  font-weight: bold;
  color: white;
  background-color: red;
  height: 2.5rem;
  border-radius: 2.5rem;
  padding: 0 1rem;
  border: none;
  margin-top: 1.1rem;

  :hover {
    cursor: pointer;
  }

  :disabled {
    background-color: #e3e3e3;
    cursor: default;
    pointer-events: none;
  }
`;
