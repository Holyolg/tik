import prisma from "../lib/db";

export default async function Test() {
  const posts = await prisma.genproject.findMany();
  console.log(posts);
  return (
    <main>
      {posts.map((post) => (
        <h1>{post.name}</h1>
      ))}
    </main>
  );
}
