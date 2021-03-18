import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 57.143rem;
  color: white;
  background: black;
`;

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 125px 0;
  width: 1260px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50ch;

  p {
    text-align: center;
    font-size: 1.286rem;
    font-weight: 300;
  }
`;

export const AuthorPortrait = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  background: red;
  margin-bottom: 20px;
`;

export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100%;
`;

export const SocialIcon = styled.div`
  width: 67px;
  height: 67px;
  background-image: url("../../assets/facebook.png"); // TODO: work on adding pictures
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: white;
  border: 3px solid red;
  border-radius: 50%;
  margin-bottom: 40px;
`;

export const ContactContainer = styled.div`
  width: 400px;
  height: 100%;
`;

export const ContactFormWrapper = styled.form``;

export const ContactInputText = styled.input`
  width: 100%;
  height: ${(props) => (props.inputType === "title" ? "60px" : "230px")};
  border: 3px solid white;
  border-radius: 15px;
  box-sizing: border-box;
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
  box-sizing: border-box;
  background: none;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 15px;
  color: white;
  font-family: inherit;
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

// TODO: turn to button
export const ContactInputSubmit = styled.input`
  display: flex;
  width: 132px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
  background: red;
  font-size: 1.286rem;
  color: white;
  border: 0;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export const AboutTitle = styled.h1`
  text-align: center;
  margin-bottom: 70px;
`;
