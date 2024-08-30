import Link from 'next/link';
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

interface Author {
    name: string;
}

interface Slug {
    current: string;
}

interface Post {
    _id: string;
    title: string;
    mainImage: { asset: { url: string } };
    body: any[];
    _createdAt: string;
    slug: Slug;
    author: Author;
}

interface BlogListProps {
    posts: Post[];
}

function BlogList({ posts }: BlogListProps) {
    const extractDescription = (body: any[]) => {
        return body
            .map(block => block.children.map((child: { text: string }) => child.text).join(' '))
            .join(' ');
    };

    return (
        <div className="pt-5">
            <hr className="border-yellow-300 mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
                {/* Render blog posts */}
                {posts.map((post) => (
                    <div key={post._id} className="flex flex-col group cursor-pointer">
                        {/* Image container */}
                        <div className="relative w-full h-64 overflow-hidden drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image
                                className="object-cover"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name || "Blog post image"}
                                layout="fill"
                                quality={90}
                            />
                        </div>
                        <div>
                            <p className="text-3xl font-semibold p-2 underline hover:underline-offset-4">{post.title}</p>
                            <div className="flex items-center justify-between text-xs">
                                <p>{new Date(post._createdAt).toString()}</p>
                                <p className="bg-yellow-500  rounded-full px-3 py-1 text-black font-bold">{post.slug.current}</p>
                            </div>
                        </div>
                        <div>
                            <p className="line-clamp-2 text-gray-400">{extractDescription(post.body)}</p>
                        </div>
                        <Link href={`/posts/${post.slug.current}`}>
                            <p className="mt-5 font-bold flex items-center hover:underline">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
