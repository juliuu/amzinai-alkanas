import React from "react";

import { IconBackground } from "./socialIcon.styles";

import { ReactComponent as FbIcon } from "../../assets/facebook.svg";
import { ReactComponent as YoutubeIcon } from '../../assets/youtube.svg';
import { ReactComponent as InstagramIcon } from "../../assets/instagram.svg";
import { ReactComponent as GmailIcon } from "../../assets/gmail.svg";

const Icon = ({ icon }) => {
  switch (icon) {
    case "facebook":
      return <FbIcon />;
    case 'youtube':
        return <YoutubeIcon />
    case "instagram":
      return <InstagramIcon />;
    case "gmail":
      return <GmailIcon />;
    default:
      return;
  }
};

const SocialIcon = ({ icon, link }) => {
  return (
    <IconBackground href={link} target="_blank">
      <Icon icon={icon} />
    </IconBackground>
  );
};

export default SocialIcon;
