import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { format } from 'date-fns'; // Import date-fns for date formatting

// Define the query to fetch a single post by slug
const query = groq`
*[_type == 'post' && slug.current == $slug][0] {
  ...,
  author->,
  categories[]-> 
}`;

interface PostProps {
    params: {
        slug: string;
    };
}

export default async function PostPage({ params }: PostProps) {
    const post = await client.fetch(query, { slug: params.slug });

    if (!post) {
        return <p>Post not found</p>;
    }

    const publishedDate = new Date(post._createdAt);
    const formattedDate = format(publishedDate, 'MMMM dd, yyyy'); // Format the date

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <hr className="border-yellow-300 mb-10" />
            <div className="flex flex-col items-start">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center mb-6 text-gray-500">
                    <time dateTime={post._createdAt.toString()} className="text-sm">
                        Published on {formattedDate}
                    </time>
                </div>
                <div className="relative w-full h-64 mb-6">
                    <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        className="rounded-lg"
                    />
                </div>
                <PortableText value={post.body} />
            </div>
        </div>
    );
}
