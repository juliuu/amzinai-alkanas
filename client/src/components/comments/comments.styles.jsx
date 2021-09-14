import styled, { css } from 'styled-components';

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;

  h1 {
    align-self: center;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const commonPic = css`
  flex-shrink: 0;
  width: 2.22rem;
  height: 2.22rem;
  background-color: #e3e3e3;
  border-radius: 50%;
`;

export const CommentPic = styled.img`
  ${commonPic}
`;

export const BlankPic = styled.div`
  ${commonPic}

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff9b00;
  font-size: 1.333rem;
  font-weight: bold;
`;

export const CommentData = styled.div`
  display: flex;
  align-items: end;
`;

export const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.1rem;
`;

export const FirstComment = styled.div`
  display: flex;
  align-items: space-bewteen;
`;

export const CommentReply = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ea2828;
  text-decoration: underline;
  font-weight: bold;
  font-size: 1rem;
  align-self: center;
  margin-left: 2.7rem;
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

export const CancelButton = styled.input`
  font-size: inherit;
  font-weight: bold;
  color: #e3e3e3;
  margin-right: 1rem;
  height: 2.5rem;
  background-color: transparent;
  border: 0;

  :hover {
    cursor: pointer;
  }
`;

export const SubmitButton = styled.input`
  font-size: inherit;
  font-weight: bold;
  color: white;
  padding: 0 0.8rem;
  margin-right: 1rem;
  background-color: #ea2828;
  height: 2.5rem;
  border: 0;
  border-radius: 2.5rem;

  :hover {
    cursor: pointer;
  }

  :disabled {
    background-color: #e3e3e3;
    cursor: default;
    pointer-events: none;
  }
`;
