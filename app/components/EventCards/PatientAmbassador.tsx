import Image from "next/image";
import { PatientCardType } from "@/app/constants/types";

export default function PatientAmbassadorCard({
  patient,
}: {
  patient: PatientCardType;
}) {
  const patientName = patient.patientName;
  const patientAsset = patient.patientAsset.fields.file.url;
  const patientAssetHeight =
    patient.patientAsset.fields.file.details.image.height;
  // const patientAssetHeight = ppatient.patientAsset.fields.file.details.image.size;
  const patientAssetWidth =
    patient.patientAsset.fields.file.details.image.height;
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
