import { TwoColumnComponentType, TwoColumnProps } from "../constants/types";
import Image from "next/image";

export function ColumnCard({ column }: TwoColumnComponentType) {
  const columnImage = column.fields.columnImage.fields.file;

  return (
    <div className="rounded-[10px] md:max-w-[550px] shadow border border-black border-opacity-10 pb-8 md:p-6 overflow-hidden">
      <div className="relative w-full h-[240px] md:h-[400px] md:rounded-[10px] overflow-hidden">
        <Image
          src={`https:${columnImage.url}`}
          alt={columnImage.fileName}
          fill
          objectFit="cover"
        />
      </div>
      <div className="md:h-min-[242px] px-10 md:px-0 flex-col ">
        <div className="font-arial leading-150 py-4 ">
          <h1 className="text-2xl lg:text-3xl">{column.fields.columnTitle}</h1>
          <h2 className="text-xl">{column.fields.columnSubTitle}</h2>
        </div>
        <p className="text-xl font-normal leading-[30px] py-4">
          {column.fields.columnParagraph}{" "}
        </p>
      </div>
    </div>
  );
}

export default function TwoColumn({ contents }: TwoColumnProps) {
  return (
    <section className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 md:justify-items-center py-4 md:py-6 px-2.5 md:px-30 lg:px-40">
      {contents?.map((content: any, i: number) => (
        <ColumnCard key={i} column={content} />
      ))}
    </section>
  );
}
