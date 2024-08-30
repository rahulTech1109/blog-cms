"use client";

import { usePathname } from 'next/navigation';

function Banner() {
    const pathname = usePathname();

    // Check if the pathname starts with '/studio/'
    const shouldHideBanner = /^\/studio\/.*/.test(pathname);

    if (shouldHideBanner) {
        return null; // Hide the banner by returning null
    }

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 font-bold mb-10">
            <div>
                <h1 className="text-7xl">Daily Blogging</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome To {""}
                    <span className="text-yellow-300"> Every Developer's </span>
                    Fav Blog
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-300 max-w-sm">
                New Products | Tech Focused | New Launches | Weekly Blogs & More..
            </p>
        </div>
    );
}

export default Banner;
