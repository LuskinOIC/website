import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";
import external_icon_white from "@/public/external-link-icon-white.svg";

import { SAVE_MY_SPOT, MYCHART_URL, DONATE_URL } from "@/app/constants/links";

const styles = {
  widgetContainer: (isScrolled: boolean) =>
    `hidden md:flex flex-row gap-10 justify-end w-full pr-8 text-white bg-[#0076AD] h-10 text-base transition-transform ease-out ${
      isScrolled ? "transform -translate-y-full" : "transform translate-y-0"
    }`,
  overlapTab: (isScrolled: boolean) =>
    `hidden md:flex flex-col text-center justify-center z-50 px-7 py-4 rounded-b-2xl hover:underline transition-all duration-500 ease-in-out ${
      isScrolled ? "max-h-0 overflow-hidden" : "max-h-[5rem] h-20"
    }`,
  links: "py-2 font-semibold  hover:underline ",
};

type SupportWidgetProps = {
  isScrolled: boolean;
};

const handleClick = (text: string) => {
  sendGAEvent({
    event: "buttonClicked",
    value: text,
  });
};

export default function SupportWidget({ isScrolled }: SupportWidgetProps) {
  return (
    <div className={`${styles.widgetContainer(isScrolled)}`}>
      <a
        href={SAVE_MY_SPOT}
        onClick={() => handleClick("Nav Save My Spot")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.overlapTab(isScrolled)} bg-[#825AA4]`}
      >
        Urgent Care <strong>Save My Spot</strong>
      </a>
      <div className="flex flex-row">
        <a href={MYCHART_URL} className={styles.links}>
          MYCHART
        </a>
        <Image
          src={external_icon_white}
          alt="External Link"
          width={16}
          height={16}
          // className={styles.linkIcon}
        />
      </div>
      <div className="py-2"> | </div>
      <a
        href="/espanol"
        onClick={() => handleClick("Nav Spanish Page")}
        className={styles.links}
      >
        Español
      </a>
      <a
        href={DONATE_URL}
        onClick={() => handleClick("Nav Donate")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.overlapTab(
          isScrolled
        )} bg-[#FCE385] text-black font-semibold text-lg`}
      >
        DONATE
      </a>
    </div>
  );
}
