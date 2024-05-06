export const styles = {
  container: "relative flex flex-col w-full overflow-hidden md:text-left",
  // TODO: Add min-h-[275px] when we handle adding mobile version of the image
  image: "w-full h-auto aspect-ratio",
  btn: "h-6 md:h-auto text-[10px] md:text-base md:w-auto text-center md:my-2 md:mx-0",
  overlayDesktop:
    "absolute top-1/2 md:-translate-x-[60%] lg:-translate-x-[50%] -translate-y-1/2 w-1/3 text-left lg:w-auto lg:max-w-[500px] bg-white bg-opacity-75 rounded p-6",
  title: "text-[16px] lg:text-[48px] leading-snug",
};
