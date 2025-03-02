export default function ProjectsPage() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h1>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            A list of all your graph visualization projects
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            New Project
          </button>
        </div>
      </div>

      <div className="mt-8 overflow-hidden bg-white dark:bg-gray-800 shadow rounded-lg">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Example project - we'll make this dynamic later */}
          <li className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
            <a href="/projects/example" className="block">
              <div className="flex items-center justify-between">
                <p className="truncate text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  Example Project
                </p>
                <div className="ml-2 flex flex-shrink-0">
                  <p className="inline-flex rounded-full bg-green-100 dark:bg-green-800 px-2 text-xs font-semibold leading-5 text-green-800 dark:text-green-100">
                    Active
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  A sample graph visualization project
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
} 