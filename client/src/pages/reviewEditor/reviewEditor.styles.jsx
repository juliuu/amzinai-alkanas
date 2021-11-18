import styled, { css } from 'styled-components';

export const EditorContainer = styled.div`
  padding-top: calc(3.6rem + 1.1rem);
  margin: 0 15.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1rem;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.56rem;
`;

const commonInput = css`
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e3e3e3;
  border-radius: 0.83rem;
  margin-bottom: 1.1rem;

  ::placeholder {
    color: #e3e3e3;
  }

  :focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  padding: 1rem 1rem;
  resize: none;

  ${commonInput}
`;

export const Input = styled.input`
  height: 2.3rem;
  padding: 0 1rem;

  ${commonInput}
`;
