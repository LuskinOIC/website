import Image from "next/image";

export default function PhysicianVerticalMobile() {
  // TEMP fix for linter
  let physician = {
    physicianName: "Anthony Last Name",
    picture: "http://placekitten.com/200/300",
    w: 200,
    h: 300,
  };

  return (
    <section
      key={physician.physicianName}
      className="flex flex-cols bg-[#0076AD] rounded-lg shadow-md text-white h-auto p-1"
    >
      <div className="relative w-[80px] h-[80px]">
        <Image
          alt="Mountains"
          src={physician.picture}
          fill
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <h2 className="basis-2/3 place-self-center text-lg font-bold">
        {physician.physicianName + ", MD, CD, EF, "}
      </h2>
    </section>
  );
}
