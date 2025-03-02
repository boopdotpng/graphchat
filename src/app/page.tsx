import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f4e9] dark:bg-[#282828] flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800 mb-6">
            Graph Chat
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
            Visualize and analyze your data through interactive graph conversations
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-md">
              Sign Up
            </button>
            <Link href="/projects" className="inline-block px-8 py-3 bg-white dark:bg-[#32302f] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-[#3c3836] transition-colors shadow-md">
              Log In
            </Link>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Simple, transparent pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {/* Free Plan */}
            <div className="bg-white dark:bg-[#32302f] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Free</h3>
              <p className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                $0<span className="text-lg font-normal text-gray-500 dark:text-gray-400">/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 3 projects
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic graph layouts
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Community support
                </li>
              </ul>
              <button className="w-full py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors shadow-md">
                Get Started
              </button>
            </div>

            {/* Plus Plan */}
            <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-amber-600">
                  Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Plus</h3>
              <p className="text-4xl font-bold text-white mb-6">
                $10<span className="text-lg font-normal text-gray-100">/month</span>
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-amber-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited projects
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-amber-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced graph layouts
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-amber-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-amber-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom themes
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-amber-600 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400">
        <p>© 2024 Graph Chat. All rights reserved.</p>
      </footer>
    </div>
  );
}
