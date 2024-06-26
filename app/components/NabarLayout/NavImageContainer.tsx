import Image from "next/image";
import Link from "next/link";

export default function NavImageContainer({ imageContainer }: any) {
  const { image, overlayText, overlayLink } = imageContainer;
  const hasImage =
    image &&
    image.fields &&
    image.fields.file &&
    image.fields.file.details &&
    image.fields.file.details.image;
  return (
    <div className="relative group">
      {overlayLink && (
        <Link href={overlayLink} className="rounded-lg overflow-hidden rounded">
          <div
            className="rounded-lg overflow-hidden h-fit"
            style={{
              width: "407px",
              height: "300px",
            }}
          >
            {hasImage && (
              <Image
                src={`https:${image.fields.file.url}`}
                alt={image.fields.title}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                className="transition-opacity duration-300 ease-in-out group-hover:opacity-75 rounded-lg"
              />
            )}
          </div>
          <div className="absolute bottom-[10%] left-0 m-4 text-white bg-opacity-50 p-1">
            {overlayText}
          </div>
        </Link>
      )}
    </div>
  );
}
