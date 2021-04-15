import React from "react";

import {
  AboutContainer,
  AboutWrapper,
  AuthorContainer,
  AuthorPortrait,
  SocialsContainer,
  SocialIconWrapper,
  ContactContainer,
  ContactForm,
  ContactInputText,
  ContactInputTextarea,
  ContactInputSubmit,
  AboutTitle,
} from "./aboutSection.styles";

import SocialIcon from "../socialIcon/socialIcon.component";

const AboutSection = () => (
  <AboutContainer>
    <AboutWrapper>
      <AuthorContainer>
        <AboutTitle>APIE MANE</AboutTitle>
        <AuthorPortrait />
        <p>
          Jeigu mes dar nesusipažinome - LABAS! Aš esu Robertas. Maistas man yra
          aistra - mėgstu skaniai ir kokybiškai pasigaminti maistą, tačiau taip
          pat mėgstu aplankyti įvairius restoranus, paragauti neragautų skonių,
          atrasti naujų patiekalų bei kokybiškai pavalgyti. Jeigu maisto
          ragavimas ar gaminimas yra ir TAVO aistra - tuomet Sveikas, naujasis
          bičiuli!
        </p>
      </AuthorContainer>
      <SocialsContainer>
        <AboutTitle>SUSISIEKIME</AboutTitle>
        <SocialIconWrapper>
          <div>
            <SocialIcon icon="facebook" link="https://facebook.com" />
            <SocialIcon icon="gmail" link="https://gmail.com" />
          </div>
          <div>
            <SocialIcon icon="instagram" link="https://instagram.com" />
            <SocialIcon icon="youtube" link="https://youtube.com" />
          </div>
        </SocialIconWrapper>
      </SocialsContainer>
      <ContactContainer>
        <AboutTitle>PARAŠYK MAN</AboutTitle>
        <ContactForm>
          <ContactInputText
            inputType="title"
            type="text"
            placeholder="Tema..."
            name="email"
          />
          <ContactInputTextarea
            inputType="message"
            type="text"
            placeholder="Žinutė..."
            name="message"
          />
          <ContactInputSubmit type="submit" value="Siųsti" />
        </ContactForm>
      </ContactContainer>
    </AboutWrapper>
  </AboutContainer>
);

export default AboutSection;
