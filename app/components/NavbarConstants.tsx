import { DONATE_URL, SAVE_MY_SPOT } from "@/app/constants/links";

export const dropdowns = [
  {
    label: "Patient Care",
    stateKey: "patientCare",

    subItems: [
      { label: "Patient Care", url: "/patient-care" },
      { label: "Urgent Care", url: SAVE_MY_SPOT },
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
      { label: "About Luskin", url: "/about" },
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

export const MobileDropdowns = [
  {
    label: "PATIENT CARE",
    type: "button",
    stateKey: "patientCare",
    cssClasses: "",

    subItems: [
      { label: "PATIENT CARE", url: "/patient-care", type: "link" },
      { label: "URGENT CARE", url: SAVE_MY_SPOT, type: "link" },
      { label: "SPECIALTIES", url: "/specialties", type: "link" },
      // { label: "PLAN YOUR VISIT", url: "/plan-your-visit", type: "link" },
      // { label: "BILLING & INSURANCE", url: "/billing", type: "link" },
      // {
      //   label: "PATIENT RIGHTS & RESPONSIBILITIES",
      //   url: "/patient-rights",
      //   type: "link",
      // },
      // {
      //   label: "APPOINTMENT PREPARATION",
      //   url: "/appointment-preparation",
      //   type: "link",
      // },
      // { label: "PATIENT FORMS", url: "/patient-forms", type: "link" },
    ],
  },
  {
    label: "FOR MEDICAL PROFESSIONALS",
    type: "button",
    cssClasses: "",
    subItems: [
      // { label: "REFER A PATIENT", url: "/patient-referrals", type: "link" },
      { label: "SPECIALTIES", url: "/specialties", type: "link" },
      // { label: "CAREERS", url: "/careers", type: "link" },
      // { label: "VOLUNTEER", url: "/volunteers", type: "link" },
    ],
    stateKey: "medicalProfessionals",
  },
  {
    label: "ABOUT LUSKINOIC",
    type: "button",
    cssClasses: "",
    subItems: [
      // { label: "ABOUT", url: "/about-luskin", type: "link" },
      { label: "NEWS/BLOG", url: "/blog", type: "link" },
    ],
    stateKey: "about",
  },
  {
    label: "WAYS TO GIVE",
    subItems: [
      {
        label: "DONATE",
        url: DONATE_URL,
        type: "link",
      },
      // {
      //   label: "CORPORATE PARTNERSHIPS",
      //   url: "/corporate-partnerships",
      //   type: "link",
      // },
      { label: "EVENTS", url: "/events", type: "link" },
      // { label: "VOLUNTEER", url: "/volunteer", type: "link" },
    ],

    stateKey: "waysToGive",
    cssClasses: "",
  },
];
