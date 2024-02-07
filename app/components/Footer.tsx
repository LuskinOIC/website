import Link from "next/link";
import Image from "next/image";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import youtube from "../../public/youtube.svg";
import instagram from "../../public/instagram.svg";
import yelp from "../../public/yelp.svg";
import xlogo from "@/public/XLogo.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MYCHART_URL,
  SAVE_MY_SPOT,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../constants/links";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  // TODO: ensure appropriate divs/spans/etc elements placed appropriately for smoothest possible layout styling
  return (
    <>
      <NewsletterSignup />
      {/* footer container */}
      <div
        id="container"
        className="flex justify-around bg-[#0076AD] text-white pt-8 pb-11"
      >
        <div
          id="footer-left-content-container"
          className="flex flex-col p-2 tracking-wide"
        >
          <h1
            id="organization-header"
            className="text-lg font-semibold tracking-wide text-center"
          >
            LuskinOIC Pediatric Orthopedic
          </h1>
          <div className="text-sm font-medium">
            <div id="contact-info-container" className="pt-4 pb-6 flex ">
              <div id="contact-info-hospital-uc" className="pr-10">
                <h3 className="text-base pb-2.5">Hospital/Urgent Care</h3>
                <div id="hospital-uc-address" className="pb-4">
                  <p>403 West Adams Boulevard</p>
                  <p>Los Angeles, CA 90007</p>
                </div>
                <p>(213) 742-1000</p>
              </div>
              <div className="inline-block h-28 w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50 hidden lg:block"></div>
              <div id="contact-info-clinic" className="hidden lg:block pl-10">
                <h3 className="text-base pb-2.5">Clinic</h3>
                <div id="clinic-address" className="pb-4">
                  <p>1250 16th Street, Suite 2100B</p>
                  <p>Santa Monica, CA 90404</p>
                </div>
                <p>(310) 395-4814</p>
              </div>
            </div>
          </div>
          <div id="follow-container">
            <h3 className="text-sm pt-4">Follow LuskinOIC!</h3>
            <div id="social-media">
              <ul className="flex pt-3.5">
                <li className="pr-3">
                  <Link href={FACEBOOK_URL}>
                    <Image src={facebook} alt="facebook" className="" />
                  </Link>
                </li>
                <li className="pr-3">
                  <Link href={LINKEDIN_URL}>
                    <Image src={linkedin} alt="linkedin" className="" />
                  </Link>
                </li>
                <li className="pr-3">
                  <Link href={TWITTER_URL}>
                    <Image src={xlogo} alt="twitter" className="" />
                  </Link>
                </li>
                <li className="pr-3">
                  <Link href={YOUTUBE_URL}>
                    <Image src={youtube} alt="youtube" className="" />
                  </Link>
                </li>
                <li className="pr-3">
                  <Link href={INSTAGRAM_URL}>
                    <Image src={instagram} alt="instagram" className="" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.yelp.com/biz/luskin-orthopaedic-institute-for-children-los-angeles">
                    <Image src={yelp} alt="yelp" className="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* right section of footer */}
        <div id="footer-right-content-container" className="hidden lg:flex">
          {/* left section of footer-right */}
          <div id="about-support-container" className="pr-24">
            <span id="about-container" className="flex flex-col pb-4">
              <h2 className="font-semibold text-lg text-[#FCE385] tracking-wide pb-0.5">
                About
              </h2>
              <ul id="about" className="">
                <li>
                  <p>
                    <Link role="button" href="/about" className="hover:underline">
                      Mission & Purpose
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" className="hover:underline" href="/news">
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
                    <Link role="button" href="/patient-care/urgent-care" className="hover:underline">
                      Urgent Care
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="/specialties" className="hover:underline">
                      Specialty Treatment
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="/patient-care" className="hover:underline">
                      Billing & Insurance
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href={MYCHART_URL} className="hover:underline">
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
                    <Link role="button" href="/physicians" className="hover:underline">
                      LuskinOIC Physicians
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="/medical-professions" className="hover:underline">
                      Refer a Patient
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=1fe50326-beac-4a7c-a564-f8a14f9c5bb0&ccId=19000101_000001&type=MP&lang=en_US" className="hover:underline">
                      Careers
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="#" className="hover:underline">
                      Volunteer
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="#" className="hover:underline">
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
                    <Link role="button" href="/ways-to-give" className="hover:underline">
                      Donate
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="#" className="hover:underline">
                      Events
                    </Link>
                  </p>
                </li>
                <li>
                  <p>
                    <Link role="button" href="#" className="hover:underline">
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
