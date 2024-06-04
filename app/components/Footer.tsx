import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import youtube from "../../public/youtube.svg";
import instagram from "../../public/instagram.svg";
import yelp from "../../public/yelp.svg";
import xlogo from "@/public/XLogo.svg";
import phone from "@/public/phone-white.svg";
import pin from "@/public/map-pin-white.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../constants/links";
import NewsletterSignup from "./NewsletterSignup";
import translations from "@/public/locales/en.json";
import {
  FooterItemsSectionProps,
  NavigationBarType,
} from "@/app/constants/types";

const socialMediaLinks = [
  { url: FACEBOOK_URL, src: facebook, alt: "facebook" },
  { url: LINKEDIN_URL, src: linkedin, alt: "linkedin" },
  { url: TWITTER_URL, src: xlogo, alt: "twitter" },
  { url: YOUTUBE_URL, src: youtube, alt: "youtube" },
  { url: INSTAGRAM_URL, src: instagram, alt: "instagram" },
  {
    url: "https://www.yelp.com/biz/luskin-orthopaedic-institute-for-children-los-angeles",
    src: yelp,
    alt: "yelp",
  },
];

const styles = {
  footerContainer: "flex justify-evenly bg-[#0076AD] text-white py-8",
  leftContainer: "flex flex-col tracking-wide gap-2 pl-4 lg:pl-4",
  rightContainer: "hidden lg:grid grid-cols-2 md:grid-cols-2 gap-10",
  subHeader: "font-semibold text-lg text-[#FFF5C6] tracking-wide",
  mainHeader:
    "text-2xl font-semibold tracking-wide text-left pb-2 pl-4 lg:pl-0 lg:self-center",
  baseText: "text-lg",
  contactInfoContainer: "flex flex-row gap-x-8 pl-4",
  contactInfoSection: "grid grid-row-4",
  border:
    "inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 hidden lg:block",
  iconsContainer: "flex flex-row py-2",
};

const FooterItemsSection = ({
  title,
  id,
  footerItems,
}: FooterItemsSectionProps) => (
  <div>
    <h2 className={styles.subHeader}>{title}</h2>
    <ul id={id} className="">
      {footerItems &&
        footerItems.map((link, index) => {
          return link.fields.title === title ? (
            <li key={index}>
              <p>
                {link.fields.isExternal ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link.fields.url}
                    className={"hover:underline"}
                  >
                    {link.fields.text}
                  </a>
                ) : (
                  <Link
                    role="button"
                    href={link.fields.url}
                    className={"hover:underline"}
                  >
                    {link.fields.text}
                  </Link>
                )}
              </p>
            </li>
          ) : (
            ""
          );
        })}
    </ul>
  </div>
);

export default function Footer({ footer }: { footer: NavigationBarType }) {
  return (
    <footer>
      <NewsletterSignup />
      {/* footer container */}
      <div id="container" className={styles.footerContainer}>
        <div
          id="footer-left-content-container"
          className={styles.leftContainer}
        >
          <h1 id="organization-header" className={styles.mainHeader}>
            {translations.organization.name}
          </h1>
          <div
            id="contact-info-container"
            className={`${styles.contactInfoContainer} ${styles.baseText}`}
          >
            <div
              id="contact-info-hospital-uc"
              className={styles.contactInfoSection}
            >
              <h2 className={styles.subHeader}>
                {translations.organization.medicalPavilion} &amp; <br />
                {translations.organization.aumbulatorySurgeryCenter}
              </h2>

              <div className={styles.iconsContainer}>
                <Image
                  src={pin}
                  width={20}
                  height={20}
                  alt="Address"
                  className="mr-5"
                />
                <a
                  href="https://maps.app.goo.gl/8N6bo3GfA2oV26qm8"
                  id="hospital-uc-address"
                  className="hover:underline"
                  target="_blank"
                >
                  <p>{translations.organization.addressLine1}</p>
                  <p>{translations.organization.addressLine2}</p>
                </a>
              </div>

              <div className={styles.iconsContainer}>
                <Image
                  src={phone}
                  width={20}
                  height={20}
                  alt="Phone number"
                  className="mr-5"
                />
                <p>{translations.organization.phoneNumber}</p>
              </div>
              <div id="contact-info-hours">
                <h2 className={styles.subHeader}>
                  {translations.organization.urgentCareHoursHeading}
                </h2>
                <div id="hours">
                  <p>{translations.organization.urgentCareOpenHours}</p>
                  <p>{translations.organization.urgentCareClosedHours}</p>
                </div>
              </div>
            </div>

            <div className={styles.border}></div>

            <div
              id="contact-info-clinic"
              className={`hidden md:${styles.contactInfoSection}`}
            >
              <h2 className={`${styles.subHeader} py-3`}>
                {translations.organization.childrensClinic}
              </h2>

              <div className={styles.iconsContainer}>
                <Image
                  src={pin}
                  width={20}
                  height={20}
                  alt="Address"
                  className="mr-5"
                />
                <a
                  href="https://maps.app.goo.gl/NYAiQVcfWpYMt2f99"
                  id="childrens-clinic-address"
                  className="hover:underline"
                  target="_blank"
                >
                  <p>{translations.organization.childrensClinicAddressLine1}</p>
                  <p>{translations.organization.childrensClinicAddressLine2}</p>
                </a>
              </div>
              <div className={styles.iconsContainer}>
                <Image
                  src={phone}
                  width={20}
                  height={20}
                  alt="Phone number"
                  className="mr-5"
                />
                <p>{translations.organization.childrensClinicPhoneNumber}</p>
              </div>

              {/* FOLLOW CONTAINER */}
              <div id="follow-container">
                <h2 className={styles.subHeader}>
                  {translations.socialMedia.followLuskinOIC}
                </h2>
                <div id="social-media">
                  <ul className="flex pt-3">
                    {socialMediaLinks.map(({ url, src, alt }) => (
                      <li key={alt} className="pr-3">
                        <a href={url} target="_blank">
                          <Image src={src} alt={alt} className="" width={44} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="footer-right-content-container"
          className={`${styles.rightContainer} ${styles.baseText}`}
        >
          {footer.dropdowns.map((dropdown, index) => (
            <FooterItemsSection
              key={index}
              title={dropdown.fields.text}
              id={dropdown.sys.id}
              footerItems={dropdown.fields.navigationLinks || []}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
