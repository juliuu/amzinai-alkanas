import React from 'react';

import { IconContainer, IconBackground } from './socialIcon.styles';

import { ReactComponent as FbIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/svg/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../assets/svg/instagram.svg';
import { ReactComponent as GmailIcon } from '../../assets/svg/gmail.svg';

const Icon = ({ icon }) => {
  switch (icon) {
    case 'facebook':
      return <FbIcon />;
    case 'youtube':
      return <YoutubeIcon />;
    case 'instagram':
      return <InstagramIcon />;
    case 'gmail':
      return <GmailIcon />;
    default:
      return;
  }
};

const SocialIcon = ({ icon, link, children }) => {
  return (
    <IconContainer>
      <IconBackground href={link} target="_blank" withChildren={children ? true : false}>
        <Icon icon={icon} />
      </IconBackground>
      {children}
    </IconContainer>
  );
};

export default SocialIcon;
