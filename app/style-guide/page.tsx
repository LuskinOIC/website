import Page from "@/app/components/Page";
import { getPageByType } from "@/app/utils/contentful";
import { PAGE_TYPES } from "@/app/constants/entries";

export default async function About() {
  const page = await getPageByType(PAGE_TYPES.STYLE_GUIDE);
  return <Page page={page} />;
}
