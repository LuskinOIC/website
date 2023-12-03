import Image from "next/image";

function PhysicianCardMobile({ physician }: any) {
  return (
    <div className="flex md:hidden flex-cols bg-[#0076AD] rounded-lg shadow-md text-white h-auto p-1 my-4">
      <div className="relative w-20 h-20">
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
      <h2 className="basis-2/3 place-self-center text-base font-bold">
        {physician.physicianName + ", MD, CD, EF, "}
      </h2>
    </div>
  );
}

export default function PhysicianCardVertical() {
  let physician = {
    physicianName: "Anthony Last Name",
    picture: "http://placekitten.com/200/300",
  };

  return (
    <>
      <PhysicianCardMobile physician={physician} />
      <section
        key={physician.physicianName}
        className="hidden md:grid md:grid-cols-4 gap-x-3 gap-y-5 w-full w-full"
      >
        <div className="flex flex-col items-center border border-black border-opacity-10 rounded-lg shadow-md p-6">
          <Image
            src={physician.picture}
            width={280}
            height={280}
            alt="Card Image"
            className="mb-5 rounded"
          />
          <div className="px-1 justify-center items-center inline-flex">
            <h2 className="grow shrink text-center text-xl ">{`${physician.physicianName}, MD MBA`}</h2>
          </div>
        </div>
      </section>
    </>
  );
}
