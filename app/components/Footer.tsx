// import Link from "next/link";

export default function Footer() {
	// TODO: ensure appropriate divs/spans/etc elements placed appropriately for smoothest possible layout styling
	// Use next/link to link to the pages.
	return (
		// footer container
		<div id="container" className="flex">
			{/* left section of footer */}
			<div id="footer-left-content-container" className="flex flex-col">
				<h1 id="organization-header">LuskinOIC Pediatric Orthopedic</h1>
				<div id="contact-info" className="">
					<div id="contact-info-hospital-uc">
						<h3>Hospital/Urgent Care</h3>
						<p>403 West Adams Boulevard</p>
						<p>Los Angeles, CA 90007</p>
						<p>(213) 742-1000</p>
					</div>
					<div id="contact-info-clinic" className="hidden lg:block">
						<h3>Clinic</h3>
					</div>
				</div>

				<div id="follow-container">
					{/* id="social-media" makes div vanish? */}
					<p>Follow LuskinOIC!</p>
					<div id="social-media-buttons">
						<p>*INSERT SOCIAL MEDIA IMG HYPERLINKS*</p>
						<img />
					</div>
				</div>
			</div>
			{/* right section of footer */}
			<div id="footer-right-content-container" className="flex hidden lg:block">
				{/* left section of footer-right */}
				<div id="about-support-container" className="">
					<span id="about-container" className="flex flex-col">
						<h2>About</h2>
						<a href="#">Mission & Purpose</a>
						<a href="#">News</a>
					</span>
					<span id="support-container" className="flex flex-col">
						<h2>Patient Support</h2>
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
					<span id="health-pro-container" className="flex flex-col">
						<h3>Health Professionals</h3>
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
						<h3>Get Involved</h3>
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
