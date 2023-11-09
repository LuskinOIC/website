// import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  // TODO: ensure appropriate divs/spans/etc elements placed appropriately for smoothest possible layout styling
  // Use next/link to link to the pages.

  // replaced all tabs with spaces, this time to match prettierrc.json, 3rd attempt
  return (
    // footer container
    <div
      id="container"
      className="flex justify-around bg-[#0076AD] text-white pt-8 pb-11">
      <div
        id="footer-left-content-container"
        className="flex flex-col p-2 tracking-wide">
        <h1
          id="organization-header"
          className="text-lg font-semibold tracking-wide text-center">
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
          <div id="">
            <ul id="" className="flex">
              <li>
                <a href="https://www.facebook.com/LuskinOIC/">
                  <Image src="" alt="facebook.com" className="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/luskin-orthopaedic-institute-for-children/">
                  <Image src="" alt="linkedin.com" className="" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FLuskinOIC">
                  <Image src="" alt="twitter.com" className="" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC3JqUFKs4TmQUGa9ekOYePA">
                  <Image src="" alt="youtube.com" className="" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/luskinoic/">
                  <Image src="" alt="instagram.com" className="" />
                </a>
              </li>
              <li>
                <a href="https://www.yelp.com/biz/luskin-orthopaedic-institute-for-children-los-angeles">
                  <Image src="" alt="yelp.com" className="" />
                </a>
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
                  <a href="#" className="hover:underline">
                    Mission & Purpose
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a className="hover:underline" href="#">
                    News
                  </a>
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
                  <a href="#" className="hover:underline">
                    Urgent Care
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Specialty Treatment
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Billing & Insurance
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    MyChart
                  </a>
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
                  <a href="#" className="hover:underline">
                    LuskinOIC Physicians
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Refer a Patient
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Volunteer
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Research
                  </a>
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
                  <a href="#" className="hover:underline">
                    Donate
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#" className="hover:underline">
                    Volunteer
                  </a>
                </p>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
