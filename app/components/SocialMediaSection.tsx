import {
  SocialMediaSectionPropsType,
  SocialMediaKey,
} from "@/app/constants/types";

// import { Facebook, Instagram, Linkedin, Twitter, Youtube, Globe } from 'react-feather';
import Image from "next/image";
import Facebook from "../../public/socials/facebook-social.svg";
import Linkedin from "../../public/socials/linkedin-social.svg";
import Twitter from "../../public/socials/twitter-social.svg";
import Youtube from "../../public/socials/youtube-social.svg";
import Instagram from "../../public/socials/instagram-social.svg";
import Yelp from "../../public/socials/yelp-social.svg";

const socialMediaIcons: [SocialMediaKey, string][] = [
  ["facebook", Facebook],
  ["instagram", Instagram],
  ["linkedIn", Linkedin],
  ["x", Twitter], // Assuming 'x' is for Twitter
  ["yelp", Yelp],
  ["youTube", Youtube],
];

const SocialMediaSection = ({ section }: SocialMediaSectionPropsType) => {
  const { fields } = section;

  return (
    <div className="flex align-center gap-x-1.5">
      {socialMediaIcons.map(
        ([alt, src]) =>
          fields[alt] && (
            <a
              href={fields[alt]}
              key={alt}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={src} alt={alt} />
            </a>
          ),
      )}
    </div>
  );
};

export default SocialMediaSection;
