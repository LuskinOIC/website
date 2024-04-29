import Link from "next/link";

/* eslint-disable i18next/no-literal-string */
export default function Error() {
  return (
    <div>
      <h2>PAge not found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
/* eslint-enable i18next/no-literal-string */
