"use client"; // Ensure this component is rendered on the client side

import Link from 'next/link';

function Footer() {
    return (
        <footer className=" text-white py-10">
            <div className="border-t border-yellow-400 my-6"></div> {/* Top line */}
            <div className="flex flex-col items-center">
                {/* Newsletter Subscription Section */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
                    <form className="flex flex-col items-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-2 rounded-md border border-gray-600 bg-gray-900 text-white mb-2"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Contact Email Section */}
                <div>
                    <p className="text-gray-300">Contact us at:  <a
                        href="mailto:rahul.concretio@gmail.com"
                        className="text-yellow-500 hover:underline"
                    >
                        rahul.concretio@gmail.com
                    </a></p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
