async function getData(slug: string) {
  // TODO: Fetch data from Contentful.
  return Promise.resolve({
    title: slug,
    content:
      "We provide world-class care to patients and their families, putting children in the best hands for a successful diagnosis, treatment and rehabilitation,so they can continue to chase their goals.",
  });
}

// this function uses the correct typing for nextjs page params
export default async function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { title, content } = await getData(params.slug);
  return (
    <main>
      <h1>{title}</h1>
      <p>{content}</p>
    </main>
  );
}
