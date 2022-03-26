import React from 'react';

export default function MobileNav({ active, setActive }) {
  return (
    <div className="absolute top-4 inset-x-0 p-2 transition origin-top md:hidden">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <div className="flex mt-2 mb-4 items-center justify-between">
          <div className="">
            <a href="/" className="block text-indigo-300 text-xl font-medium ml-4">
              Shrtrrr
            </a>
          </div>
          <div className="mr-2">
            <button
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center hover:bg-gray-300 p-2 rounded-md focus:outline-none transition duration-200"
              onClick={() => setActive(!active)}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 space-y-3 text-left">
          <a
            href="/"
            className="block text-lg font-medium hover:text-indigo-300 transition duration-200">
            Features
          </a>
          <a
            href="/"
            className="block text-lg font-medium hover:text-indigo-300 transition duration-200">
            Pricing
          </a>
          <a
            href="/"
            className="block text-lg font-medium hover:text-indigo-300 transition duration-200">
            Resources
          </a>
        </div>

        <div className="flex justify-center space-x-20 mt-4 px-5 py-4 border-t border-black">
          <a href="/" className="text-lg font-medium hover:text-indigo-300 transition duration-200">
            Log in
          </a>
          <a href="/" className="text-lg font-medium hover:text-indigo-300 transition duration-200">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
