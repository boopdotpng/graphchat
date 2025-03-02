interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <div className="flex items-center gap-x-3">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Project: {params.id}
            </h1>
            <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-100">
              Active
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Visualize and analyze your graph data
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Graph Visualization Panel */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Graph Visualization
          </h2>
          <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Graph visualization will appear here</p>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Controls
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Layout Algorithm
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option>Force Directed</option>
                <option>Circular</option>
                <option>Hierarchical</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Node Size
              </label>
              <input
                type="range"
                className="w-full"
                min="1"
                max="100"
                defaultValue="50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 