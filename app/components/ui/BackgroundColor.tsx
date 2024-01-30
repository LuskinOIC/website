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
    case "bright-blue":
      return "bg-[#32B8DE]";
    case "green":
      return "bg-[#99C221]";
  }
}
