import React, { useState, useEffect } from 'react';
import { useForm } from '../../hooks';

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
  AboutTitle,
} from './aboutSection.styles';

import { Button, SocialIcon } from '..';

const AboutSection = () => {
  const [disabled, setDisabled] = useState(true);
  const [formSent, setFormSent] = useState('pending');

  const { formData, setFormData, clearFormData } = useForm({
    theme: '',
    message: '',
  });

  useEffect(() => {
    if (formData.theme && formData.message) setDisabled(false);
    else {
      setDisabled(true);
      setFormSent('pending');
    }
  }, [formData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent('loading');

    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData }),
    }).then(() => {
      setFormSent('confirmed');
      setTimeout(() => {
        setFormSent('pending');
        clearFormData();
      }, 2000);
    });
  };

  return (
    <AboutContainer>
      <AboutWrapper>
        <AuthorContainer id="#apie">
          <AboutTitle>APIE MANE</AboutTitle>
          <AuthorPortrait />
          <p>
            Jeigu mes dar nesusipažinome - LABAS! Aš esu Robertas. Maistas man yra aistra - mėgstu skaniai ir
            kokybiškai pasigaminti maistą, tačiau taip pat mėgstu aplankyti įvairius restoranus, paragauti
            neragautų skonių, atrasti naujų patiekalų bei kokybiškai pavalgyti. Jeigu maisto ragavimas ar
            gaminimas yra ir TAVO aistra - tuomet Sveikas, naujasis bičiuli!
          </p>
        </AuthorContainer>
        <SocialsContainer id="#susisiekime">
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
          <ContactForm onSubmit={handleFormSubmit}>
            <ContactInputText
              inputType="title"
              id="theme"
              type="text"
              placeholder="Tema..."
              name="email"
              value={formData.theme}
              onChange={setFormData}
            />
            <ContactInputTextarea
              inputType="message"
              id="message"
              type="text"
              placeholder="Žinutė..."
              name="message"
              value={formData.message}
              onChange={setFormData}
              required
            />
            <Button
              data-type="loading"
              disabled={disabled}
              type="submit"
              formSent={formSent}
              value="Siųsti"
              valueConfirmed="Išsiųsta"
            />
          </ContactForm>
        </ContactContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default AboutSection;
