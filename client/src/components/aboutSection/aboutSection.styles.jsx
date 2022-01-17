import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  background: black;
  padding: 0rem var(--page-layout-padding);
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 7rem 0;
  max-width: var(--page-layout-width);
  height: fit-content;
  max-width: var(--home-page-content-width);
`;

export const AboutTitle = styled.h1`
  text-align: center;
  margin-bottom: 5rem;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 50ch;

  margin-bottom: 4rem;

  p {
    text-align: center;
    font-size: 1.286rem;
    font-weight: 300;
    margin: 0;
  }
`;

export const AuthorPortrait = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background: red;
  margin-bottom: 1.4rem;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding-bottom: 2.5rem;
  margin: 0 2rem;
`;

export const SocialIconWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: space-between;
  height: 100%;

  div {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const ContactContainer = styled.div`
  width: 50ch;
  height: 100%;
`;

export const ContactForm = styled.form``;

export const ContactInputText = styled.input`
  width: 100%;
  height: ${(props) => (props.inputType === 'title' ? '60px' : '230px')};
  border: 3px solid white;
  border-radius: 15px;
  background: none;
  margin-bottom: 20px;
  padding-left: 20px;
  color: white;
  font-size: 1.286rem;

  ::placeholder {
    font-size: 1.286rem;
    text-align: start;
    color: #7a7a7a;
    opacity: 1;
  }

  :focus {
    outline: none;
  }
`;

export const ContactInputTextarea = styled.textarea`
  width: 100%;
  height: 230px;
  border: 3px solid white;
  border-radius: 15px;
  background: none;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 15px;
  color: white;
  font-family: inherit;
  font-size: 1.286rem;
  resize: none;

  ::placeholder {
    font-size: 1.286rem;
    text-align: start;
    color: #7a7a7a;
    opacity: 1;
  }

  :focus {
    outline: none;
  }
`;
