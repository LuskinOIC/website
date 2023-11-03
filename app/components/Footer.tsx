// import Link from "next/link";

export default function Footer() {
	// TODO: Replace this with the actual Footer.
	// Use next/link to link to the pages.
	return (
		// footer container
		<div className="flex justify-evenly py-10">
			{/* left section of footer */}
			<div className="footer-left flex flex-col">
				<h1 id="header">LuskinOIC Pediatric Orthopedic</h1>
				<div id="locations" className="flex">
					<div>
						<h3>Hospital/Urgent Care</h3>
					</div>
					<div>
						<h3>Clinic</h3>
					</div>
				</div>

				<div id="soc-med">
					{/* id="social-media" makes div vanish? */}
					<p>Follow LuskinOIC!</p>
					<p>*INSERT SOCIAL MEDIA IMG HYPERLINKS*</p>
				</div>
			</div>
			{/* right section of footer */}
			<div id="footer-right" className="flex">
				{/* left section of footer-right */}
				<div id="about-patient-support" className="px-10">
					<span className="flex flex-col pb-5">
						<h2>About</h2>
						<a href="#">Mission & Purpose</a>
						<a href="#">News</a>
					</span>
					<span className="flex flex-col">
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
				<div id="health-prof-get-involved" className="px-10">
					<span className="flex flex-col pb-5">
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
					<span className="flex flex-col">
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
