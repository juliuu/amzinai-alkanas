import React from "react";

import {
  AboutContainer,
  AboutWrapper,
  AuthorContainer,
  AuthorPortrait,
  SocialsContainer,
  SocialIcon,
  ContactContainer,
  ContactFormWrapper,
  ContactInputText,
  ContactInputTextarea,
  ContactInputSubmit,
  AboutTitle,
} from "./aboutSection.styles";

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
        <SocialIcon />
        <SocialIcon />
        <SocialIcon />
        <SocialIcon />
      </SocialsContainer>
      <ContactContainer>
        <AboutTitle>PARAŠYK MAN:</AboutTitle>
        <ContactFormWrapper>
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
        </ContactFormWrapper>
      </ContactContainer>
    </AboutWrapper>
  </AboutContainer>
);

export default AboutSection;
