import Project from '../components/Project';

const placeholderProjects = [
  {
    id: 'knowledge-graph-analysis',
    title: "Knowledge Graph Analysis",
    summary: "A comprehensive analysis of semantic relationships in academic papers using graph-based approaches.",
    nodeCount: 156,
    dateModified: "Mar 15, 2024"
  },
  {
    id: 'social-network-visualization',
    title: "Social Network Visualization",
    summary: "Interactive visualization of social connections and community structures within a large network.",
    nodeCount: 89,
    dateModified: "Mar 10, 2024"
  },
  {
    id: 'citation-network',
    title: "Citation Network",
    summary: "Analysis of citation patterns and influential papers in the field of machine learning.",
    nodeCount: 234,
    dateModified: "Mar 5, 2024"
  },
  {
    id: 'protein-interaction-network',
    title: "Protein Interaction Network",
    summary: "Mapping and analysis of protein-protein interactions in cellular pathways.",
    nodeCount: 412,
    dateModified: "Feb 28, 2024"
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-6 h-full overflow-auto">
      <h1 className="text-3xl font-bold text-[#3c3836] dark:text-[#ebdbb2] mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderProjects.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            title={project.title}
            summary={project.summary}
            nodeCount={project.nodeCount}
            dateModified={project.dateModified}
          />
        ))}
      </div>
    </div>
  );
} 