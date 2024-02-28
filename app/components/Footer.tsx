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
  CAREERS_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MYCHART_URL,
  SAVE_MY_SPOT,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../constants/links";
import NewsletterSignup from "./NewsletterSignup";

type FooterItem = {
  text: string;
  href: string;
};

type FooterItemsSectionProps = {
  title: string;
  id: string;
  menuItems: FooterItem[];
};

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

const aboutMenuItems = [
  { text: "Mission & Purpose", href: "/about" },
  { text: "News", href: "/news" },
];

const patientSupportMenuItems = [
  { text: "Urgent Care", href: SAVE_MY_SPOT },
  { text: "Specialty Treatment", href: "/specialties" },
  { text: "Billing & Insurance", href: "/patient-care" },
  { text: "MyChart", href: MYCHART_URL },
];

const healthProfessionalsMenuItems = [
  { text: "LuskinOIC Physicians", href: "/physicians" },
  { text: "Refer a Patient", href: "/medical-professionals" },
  { text: "Careers", href: CAREERS_URL },
  { text: "Volunteer", href: "/ways-to-give" },
  {
    text: "Research",
    href: "/news/orthopaedic-hospital-research-center-ucla-westwood/",
  },
];

const getInvolvedMenuItems = [
  { text: "Donate", href: "/ways-to-give" },
  { text: "Events", href: "/events" },
  { text: "Volunteer", href: "/ways-to-give" },
];

const styles = {
  footerContainer: "flex justify-evenly bg-[#0076AD] text-white py-8",
  leftContainer: "flex flex-col tracking-wide gap-2 md:pl-4",
  rightContainer: "hidden md:flex flex-row gap-x-20",
  subHeader: "font-semibold text-lg text-[#FFF5C6] tracking-wide",
  mainHeader:
    "text-2xl font-semibold tracking-wide text-left pb-2 md:self-center",
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
  menuItems,
}: FooterItemsSectionProps) => (
  <>
    <h2 className={styles.subHeader}>{title}</h2>
    <ul id={id} className="">
      {menuItems.map((item, index) => (
        <li key={index}>
          <p>
            <Link role="button" href={item.href} className={"hover:underline"}>
              {item.text}
            </Link>
          </p>
        </li>
      ))}
    </ul>
  </>
);

export default function Footer() {
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
            LuskinOIC Pediatric Orthopaedic
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
                Medical Pavilion & <br /> Ambulatory Surgery Center
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
                  <p>
                    403 West Adams Boulevard <br /> Los Angeles, CA 90007
                  </p>
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
                <p>(213) 742-1000</p>
              </div>
              <div id="contact-info-hours">
                <h2 className={styles.subHeader}>Urgent Care Center Hours</h2>
                <div id="hours">
                  <p>Monday - Friday 8am - 4pm</p>
                  <p>Closed Saturday & Sunday</p>
                </div>
              </div>
            </div>

            <div className={styles.border}></div>

            <div
              id="contact-info-clinic"
              className={`hidden md:${styles.contactInfoSection}`}
            >
              <h2 className={`${styles.subHeader} py-3`}>
                Luskin Children&apos;s Clinic
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
                  <p>
                    1225 15th Street, Suite 2100B <br /> Santa Monica, CA 90404
                  </p>
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
                <p>(310) 395-4814</p>
              </div>

              {/* FOLLOW CONTAINER */}
              <div id="follow-container">
                <h2 className={styles.subHeader}>Follow LuskinOIC!</h2>
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
          {/* left section of footer-right */}
          <div
            id="about-support-container"
            className={styles.contactInfoSection}
          >
            <FooterItemsSection
              title="About"
              id="about"
              menuItems={aboutMenuItems}
            />
            <FooterItemsSection
              title="Patient Support"
              id="patient-support"
              menuItems={patientSupportMenuItems}
            />
          </div>
          {/* right section of footer-left */}
          <div
            id="prof-involvement-container"
            className={styles.contactInfoSection}
          >
            <FooterItemsSection
              title="Health Professionals"
              id="health-professionals"
              menuItems={healthProfessionalsMenuItems}
            />
            <FooterItemsSection
              title="Get Involved"
              id="get-involved"
              menuItems={getInvolvedMenuItems}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
