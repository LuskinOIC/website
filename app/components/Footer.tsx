// import Link from "next/link";

export default function Footer() {
  // TODO: Replace this with the actual navbar.
  // Use next/link to link to the pages.
  return (
    <div className="md:grid md:grid-cols-2 gap-1 bg-slate-500 p-10">
      <div className="col-span-1">
        <h2 className="text-center">
          LuskinOIC Pediatric Orthopedic
        </h2>
        <div className="grid grid-cols-2">
          <div>
            <p>Hospital/Urgent Care</p>
            <p>403 West Adams Boulevard</p>
            <p>Los Angeles, CA 90007</p>
            <p>(213) 742-1000</p>
          </div>
          <div>
            Placeholder
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 col-span-1">
        Right
      </div>
    </div>
  );
}
