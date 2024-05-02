import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { getPagePreviewBySlug } from "@/app/utils/contentful";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") as string;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const post = await getPagePreviewBySlug(slug);

  if (!post) {
    return new Response("Invalid slug", { status: 401 });
  }

  let redirectPath = "/";
  if (searchParams.get("redirect")) {
    redirectPath = `/${searchParams.get("redirect")}`;
  }

  draftMode().enable();
  redirect(redirectPath);
}
