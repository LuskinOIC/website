export function getData() {
  // TODO: Fetch data from Contentful.
  return Promise.resolve({
    title: "Our Goal is to Make Sure Kids Keep Chasing Theirs",
    content:
      "We provide world-class care to patients and their families, putting children in the best hands for a successful diagnosis, treatment and rehabilitation,so they can continue to chase their goals.",
  });
}

export default async function NewsArticle() {
  const { title, content } = await getData();

  return (
    <main>
      <h1>{title}</h1>
      <p>{content}</p>
    </main>
  );
}
