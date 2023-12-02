import Image from "next/image";
import { PatientCardType } from "@/app/constants/types";

export default function PatientAmbassadorCard({
  patient,
}: {
  patient: PatientCardType;
}) {
  const patientName = patient.patientName;
  const patientAssetAccess = patient.patientAsset.fields.file;
  const patientAsset = patientAssetAccess.url;
  const patientAssetHeight = patientAssetAccess.details.image.height;
  // const patientAssetHeight = ppatient.patientAsset.fields.file.details.image.size;
  const patientAssetWidth = patientAssetAccess.details.image.height;
  // console.log("PATIENT", patient);
  return (
    <div>
      <Image
        alt={patientName}
        key={patientName}
        src={patientAsset}
        width={patientAssetHeight}
        height={patientAssetWidth}
      />
      <h3>{patientName}</h3>
    </div>
  );
}
