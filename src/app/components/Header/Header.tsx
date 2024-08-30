"use client"; // Ensure this component is rendered on the client side

import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
    const pathname = usePathname();

    const shouldHideHeader = /^\/studio\/.*/.test(pathname);

    if (shouldHideHeader) {
        return null;
    }

    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div>
                <Link href='/'>
                    <h1 className="text-xl font-bold text-white">
                        Blog<span className="underline decoration-6 text-3xl decoration-yellow-500">Site</span>Tech
                    </h1>
                </Link>
            </div>
            <div className="bg-opacity-50 p-4 rounded-md shadow-md border-2 border-white-200">
                <Link href='/'>
                    <h3 className="text-l font-bold text-white">
                        Sign Up for Daily <span className="underline decoration-6 text-1xl decoration-yellow-500">Newsletter</span>
                    </h3>
                </Link>
            </div>
        </header>
    );
}

export default Header;
