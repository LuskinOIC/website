export const dropdowns = [
  {
    label: "Patient Care",
    stateKey: "patientCare",

    subItems: [
      { label: "Patient Care", url: "/patient-care" },
      { label: "Urgent Care", url: "/urgent-care" },
      { label: "Specialties", url: "/specialties" },
    ],
  },
  {
    label: "Medical Professionals",
    subItems: [
      { label: "Specialties", url: "/med-specialties" },
      { label: "Patient Referrals", url: "/patient-referrals" },
      { label: "Careers", url: "/careers" },
      { label: "Volunteers", url: "/volunteers" },
    ],
    stateKey: "medicalProfessionals",
  },
  {
    label: "About",
    subItems: [
      { label: "About Luskin", url: "/about-luskin" },
      { label: "Blog", url: "/blog" },
    ],
    stateKey: "about",
  },
  {
    label: "Ways to Give",
    subItems: [{ label: "Ways to Give", url: "/ways-to-give" }],
    stateKey: "waysToGive",
  },
];

export const menuMobileItems = [
  {
    type: "link",
    label: "URGENT CARE",
    url: "/item1",
    cssClasses: "text-white bg-purple-700",
  },
  { type: "button", label: "PATIENT CARE", cssClasses: "text-white" },
  {
    type: "link",
    label: "FOR MEDICAL PROFESSIONALS",
    url: "/",
    cssClasses: "text-white",
  },
  {
    type: "link",
    label: "ABOUT LUSKINOIC",
    url: "/",
    cssClasses: "text-white",
  },
  {
    type: "link",
    label: "WAYS TO GIVE",
    url: "/",
    cssClasses: "text-white",
  },
  {
    type: "link",
    label: "MY CHART",
    url: "/",
    cssClasses: "text-black bg-yellow-50",
  },
];
