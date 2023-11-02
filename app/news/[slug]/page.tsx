export async function generateStaticParams() {
  const blogPosts = [
    {
      fields: {
        title: "Article title",
        slug: "slug",
      },
    },
  ];

  return blogPosts.map((post) => ({
    slug: post.fields.slug,
    title: post.fields.title,
  }));
}

export default function NewsArticle({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Test{params.slug}</h1>
    </main>
  );
}
