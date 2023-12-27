import { SocialMediaSectionPropsType } from "@/app/constants/types";

// import { Facebook, Instagram, Linkedin, Twitter, Youtube, Globe } from 'react-feather';
import Image from "next/image";
import Facebook from "../../public/socials/facebook-social.svg";
import Linkedin from "../../public/socials/linkedin-social.svg";
import Twitter from "../../public/socials/twitter-social.svg";
import Youtube from "../../public/socials/youtube-social.svg";
import Instagram from "../../public/socials/instagram-social.svg";
import Yelp from "../../public/socials/yelp-social.svg";

const SocialMediaSection = ({ section }: SocialMediaSectionPropsType) => {
  const { fields } = section;

  return (
    <div className="flex align-center gap-x-1.5">
      {fields.facebook && (
        <a href={fields.facebook} target="_blank" rel="noopener noreferrer">
          <Image src={Facebook} alt="facebook" />
        </a>
      )}
      {fields.instagram && (
        <a href={fields.instagram} target="_blank" rel="noopener noreferrer">
          <Image src={Instagram} alt="instagram" />
        </a>
      )}
      {fields.linkedIn && (
        <a href={fields.linkedIn} target="_blank" rel="noopener noreferrer">
          <Image src={Linkedin} alt="LinkedIn" />
        </a>
      )}
      {fields.x && (
        <a href={fields.x} target="_blank" rel="noopener noreferrer">
          <Image src={Twitter} alt="twitter" />
        </a>
      )}
      {fields.yelp && (
        <a href={fields.yelp} target="_blank" rel="noopener noreferrer">
          <Image src={Yelp} alt="yelp" />
        </a>
      )}
      {fields.youTube && (
        <a href={fields.youTube} target="_blank" rel="noopener noreferrer">
          <Image src={Youtube} alt="youtube" />
        </a>
      )}
    </div>
  );
};

export default SocialMediaSection;
