import { DONATE_URL, MYCHART_URL, SAVE_MY_SPOT } from "@/app/constants/links";

export const dropdowns = [
  {
    label: "Patient Care",
    stateKey: "patientCare",

    subItems: [
      { label: "Patient Care", url: "/patient-care" },
      { label: "Urgent Care", url: SAVE_MY_SPOT },
      { label: "MyChart", url: MYCHART_URL },
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
      { label: "MYCHART", url: MYCHART_URL, type: "link" },
      { label: "SPECIALTIES", url: "/specialties", type: "link" },
      {
        label: "PLAN YOUR VISIT",
        url: "patient-care/?tab=PlanYourVisit#PlanYourVisit",
        type: "link",
      },
      {
        label: "BILLING & INSURANCE",
        url: "patient-care/?tab=BillingInsurance#BillingInsurance",
        type: "link",
      },
      {
        label: "PATIENT RIGHTS & RESPONSIBILITIES",
        url: "patient-care/?tab=PatientRightsResponsibilities#PatientRightsResponsibilities",
        type: "link",
      },
      {
        label: "APPOINTMENT PREPARATION",
        url: "patient-care/?tab=AppointmentPreparation#AppointmentPreparation",
        type: "link",
      },
      {
        label: "PATIENT FORMS",
        url: "/patient-care/?tab=PatientForms#PatientForms",
        type: "link",
      },
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
      { label: "ABOUT", url: "/about", type: "link" },
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
