import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import youtube from "../../public/youtube.svg";
import instagram from "../../public/instagram.svg";
import yelp from "../../public/yelp.svg";
import xlogo from "@/public/XLogo.svg";
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

export default function Footer() {
  // TODO: ensure appropriate divs/spans/etc elements placed appropriately for smoothest possible layout styling
  return (
    <>
      <NewsletterSignup />
      {/* footer container */}
      <div
        id="container"
        className="flex justify-around bg-[#0076AD] text-white py-8"
      >
        <div
          id="footer-left-content-container"
          className="flex flex-col p-2 tracking-wide"
        >
          <h1
            id="organization-header"
            className="text-lg font-semibold tracking-wide text-left pb-2"
          >
            LuskinOIC Pediatric Orthopedic
          </h1>
          <div className="text-sm font-medium">
            <div id="contact-info-container" className="flex">
              <div className="flex flex-col">
                <div id="contact-info-hospital-uc" className="pr-10 pb-2.5">
                  <h3 className="text-base pb-2.5">
                    Medical Pavilion & <br /> Ambulatory Surgery Center
                  </h3>
                  <div id="hospital-uc-address" className="pb-4">
                    <p>403 West Adams Boulevard</p>
                    <p>Los Angeles, CA 90007</p>
                  </div>
                  <p>(213) 742-1000</p>
                </div>
                <div id="contact-info-hours" className="pr-10">
                  <h3 className="text-base pb-2.5">Urgent Care Center Hours</h3>
                  <div id="hours" className="pb-4">
                    <p>Monday - Friday 8am - 4pm</p>
                    <p>Closed Saturday & Sunday</p>
                  </div>
                </div>
              </div>

              <div className="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 hidden lg:block"></div>

              <div id="contact-info-clinic" className="hidden lg:block pl-10">
                <h3 className="text-base pb-2.5">
                  Luskin Children&apos;s Clinic
                </h3>
                <div id="clinic-address" className="pb-4">
                  <p>1250 16th Street, Suite 2100B</p>
                  <p>Santa Monica, CA 90404</p>
                </div>
                <p className="pb-2.5">(310) 395-4814</p>
                <div id="follow-container">
                  <h3 className="text-sm pt-4">Follow LuskinOIC!</h3>
                  <div id="social-media">
                    <ul className="flex pt-3.5">
                      {socialMediaLinks.map(({ url, src, alt }) => (
                        <li key={alt} className="pr-3">
                          <a href={url} target="_blank">
                            <Image
                              src={src}
                              alt={alt}
                              className=""
                              width={32}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right section of footer */}
        <div
          id="footer-right-content-container"
          className="hidden md:flex flex-row"
        >
          {/* left section of footer-right */}
          <div id="about-support-container" className="pr-24">
            <span id="about-container" className="flex flex-col pb-4">
              <h2 className="font-semibold text-lg text-[#FCE385] tracking-wide pb-0.5">
                About
              </h2>
              <ul id="about" className="">
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/about"
                      className="hover:underline"
                    >
                      Mission & Purpose
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      className="hover:underline"
                      href="/news"
                    >
                      News
                    </Link>
                  </p>
                </li>
              </ul>
            </span>
            <span id="support-container" className="flex flex-col">
              <h2 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
                Patient Support
              </h2>
              <ul id="patient-support" className="">
                <li>
                  <p>
                    <Link
                      role="button"
                      href={SAVE_MY_SPOT}
                      className="hover:underline"
                    >
                      Urgent Care
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/specialties"
                      className="hover:underline"
                    >
                      Specialty Treatment
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/patient-care"
                      className="hover:underline"
                    >
                      Billing & Insurance
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href={MYCHART_URL}
                      className="hover:underline"
                    >
                      MyChart
                    </Link>
                  </p>
                </li>
              </ul>
            </span>
          </div>
          {/* right section of footer-left */}
          <div id="prof-involvement-container" className="">
            <span id="health-pro-container" className="flex flex-col pb-4">
              <h3 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
                Health Professionals
              </h3>
              <ul id="health-professionals" className="">
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/physicians"
                      className="hover:underline"
                    >
                      LuskinOIC Physicians
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/medical-professionals"
                      className="hover:underline"
                    >
                      Refer a Patient
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href={CAREERS_URL}
                      className="hover:underline"
                    >
                      Careers
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/ways-to-give"
                      className="hover:underline"
                    >
                      Volunteer
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/news/orthopaedic-hospital-research-center-ucla-westwood/"
                      className="hover:underline"
                    >
                      Research
                    </Link>
                  </p>
                </li>
              </ul>
            </span>
            <span id="involvement-container" className="flex flex-col">
              <h3 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
                Get Involved
              </h3>
              <ul id="get-involved" className="">
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/ways-to-give"
                      className="hover:underline"
                    >
                      Donate
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/events"
                      className="hover:underline"
                    >
                      Events
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link
                      role="button"
                      href="/ways-to-give"
                      className="hover:underline"
                    >
                      Volunteer
                    </Link>
                  </p>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
