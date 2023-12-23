// NOTE: We probably can completely avoid using hardcoded
// IDs by using the Contentful API to fetch the entries in bulk.
// For now we can quickly get started by hardcoding the IDs.

export const LANDING_PAGE_ID = "1g2q8XhHMq66zFxhrIA50T";

export const PAGE_TYPES = {
  LANDING_PAGE: "Landing Page",
  PATIENT_CARE: "Patient Care Page",
  ABOUT: "About Page",
  MEDICAL_PROFESSIONALS: "Medical Professionals Page",
  CORPORATE_SPONSORSHIP: "Corporate Sponsorship Page",
  LEADERSHIP: "Leadership Page",
  //Events and Specialty will likely be it's own contentful component
  EVENT: "Event",
  SPECIALTY: "Specialty",
};
