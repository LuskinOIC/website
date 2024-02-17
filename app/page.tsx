import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";
import Page from "@/app/components/Page";

// This is the root page to the website.
export default async function Home() {
  const page = await getPageByType(PAGE_TYPES.LANDING_PAGE);

  return <Page page={page} />;
}
