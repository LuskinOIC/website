// import Link from "next/link";

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
          <div id="social-media-buttons">
            <p>*****</p>
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
            <a href="#">Mission & Purpose</a>
            <a href="#">News</a>
          </span>
          <span id="support-container" className="flex flex-col">
            <h2 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
              Patient Support
            </h2>
            <a href="#" className="">
              Urgent Care
            </a>
            <a href="#" className="">
              Specialty Treatment
            </a>
            <a href="#" className="">
              Billing & Insurance
            </a>
            <a href="#" className="">
              MyChart
            </a>
          </span>
        </div>
        {/* right section of footer-left */}
        <div id="prof-involvement-container" className="">
          <span id="health-pro-container" className="flex flex-col pb-4">
            <h3 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
              Health Professionals
            </h3>
            <a href="#" className="">
              LuskinOIC Physicians
            </a>
            <a href="#" className="">
              Refer a Patient
            </a>
            <a href="#" className="">
              Careers
            </a>
            <a href="#" className="">
              Volunteer
            </a>
            <a href="#" className="">
              Research
            </a>
          </span>
          <span id="involvement-container" className="flex flex-col">
            <h3 className="font-semibold text-xl text-[#FCE385] tracking-wide pb-0.5">
              Get Involved
            </h3>
            <a href="#" className="">
              Donate
            </a>
            <a href="#" className="">
              Events
            </a>
            <a href="#" className="">
              Volunteer
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
