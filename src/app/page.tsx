import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import BlogList from "./components/blogs/BlogList";

const query = groq`
*[_type == 'post'] {
  ...,
  author->,
  categories[]-> 
} | order(_createdAt desc)`

export default async function Home() {
  const post = await client.fetch(query)
  console.log(post);
  return (
    <div>
      <BlogList posts={post} />
    </div>
  );
}
