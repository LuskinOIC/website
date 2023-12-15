export default function getBackgroundColor(colorName: string) {
  switch (colorName) {
    case "blue":
      return "bg-[#0076AD]";
    case "purple":
      return "bg-[#825AA4]";
    case "white":
      return "bg-[#FFFFFF]";
    default:
      return "bg-white";
  }
}
