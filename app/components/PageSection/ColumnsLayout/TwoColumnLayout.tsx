import Image from "next/image";
import { ColumnType } from "@/app/constants/types";
import getBackgroundColor from "@/app/components/ui/BackgroundColor";
import SectionContent from "./SectionContent";

export default function TwoColumnLayout({
  columnLayout,
  width,
}: {
  columnLayout: ColumnType;
  width?: string;
}) {
  const isReversedOrder = columnLayout.fields.reverseOrder;
  const orderClass = isReversedOrder ? "md:order-1" : "";

  let textPadding = "";
  if (width === "FULL_WIDTH") {
    textPadding = isReversedOrder
      ? "pl-0 pr-12 md:ml-[20%]"
      : "pr-0 pl-12 md:mr-[20%]";
  }

  const bgColor = columnLayout.fields.backgroundColor
    ? getBackgroundColor(columnLayout.fields.backgroundColor)
    : "white";

  const orientationClass =
    columnLayout.fields.imageOrientation === "Center Align"
      ? "mx-auto"
      : `md:rounded-l-lg ${isReversedOrder ? "float-right" : "float-left"}`;

  const imageClass = isReversedOrder ? "md:float-right" : "md:float-left";

  return (
    <section
      className={`relative grid md:grid-cols-2 items-center justify-between ${bgColor}`}
    >
      {columnLayout.fields.image && (
        <div className={`${orderClass} ${orientationClass}`}>
          <div style={{ maxWidth: "768px" }} className={`${imageClass}`}>
            <Image
              className={`${imageClass}`}
              src={`https:${columnLayout.fields.image.fields.file.url}`}
              alt={columnLayout.fields.image.fields.description}
              width={columnLayout.fields.image.fields.file.details.image.width}
              height={
                columnLayout.fields.image.fields.file.details.image.height
              }
            />
          </div>
        </div>
      )}

      <div className={`basis-1/2 ${textPadding}`}>
        <SectionContent section={columnLayout} />
      </div>
    </section>
  );
}
