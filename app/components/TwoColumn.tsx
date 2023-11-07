import { PageSectionType } from "@/app/constants/types";
import Image from "next/image";

export default function TwoColumn({ section }: { section: PageSectionType }) {

  return (
    <div className="px-40 py-10 justify-between items-start inline-flex">
      <div className="self-stretch p-6 bg-white rounded-[10px] shadow border border-black border-opacity-10 flex-col justify-start items-start gap-6 inline-flex">
        <img
          className="w-[500px] h-[400px] rounded-[10px]"
          src="https://via.placeholder.com/500x400"
        />
        <div className="h-[242px] flex-col justify-start items-start gap-6 flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[512px] text-neutral-900 text-[28px] font-normal font-['Arial'] leading-[33.60px]">
              Pediatric Orthopedic Surgery Fellowship Program
            </div>
          </div>
          <div className="w-[512px] text-neutral-900 text-xl font-normal font-['Arial'] leading-[30px]">
            Designed for physicians who have successfully completed an
            orthopaedic surgery residency program, OIC offers a unique
            experience for fellows as a non-profit outpatient orthopedic
            institution that also works in affiliation with UCLA.{' '}
          </div>
        </div>
      </div>
      <div className="self-stretch p-6 bg-white rounded-[10px] shadow border border-black border-opacity-10 flex-col justify-start items-start gap-6 inline-flex">
        <img
          className="w-[500px] h-[400px] rounded-[10px]"
          src="https://via.placeholder.com/500x400"
        />
        <div className="h-52 flex-col justify-start items-start gap-6 flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="w-[512px] text-neutral-900 text-[28px] font-normal font-['Arial'] leading-[33.60px]">
              International Children’s Program
            </div>
          </div>
          <div className="w-[512px] text-neutral-900 text-xl font-normal font-['Arial'] leading-[30px]">
            LuskinOIC founded the International Children’s Program (ICP) , 60
            years ago, for one vital reason: to enable children living outside
            the U.S. to receive high-quality orthopaedic care, regardless of
            their family’s financial situation.
          </div>
        </div>
      </div>
    </div>
  )
}
