import { getWaysToGivePage } from "../utils/contentful";

// This page represents the "ways to give" page.
export default async function WaysToGive() {
  const page = await getWaysToGivePage();

  return (
    <main>
      <h1>Transform a Child&apos;s Future</h1>
    </main>
  );
}
