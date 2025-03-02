import { format } from 'date-fns';
import Link from 'next/link';

interface ProjectProps {
  id: string;
  title: string;
  summary: string;
  nodeCount: number;
  dateModified: string;
}

export default function Project({ id, title, summary, nodeCount, dateModified }: ProjectProps) {
  return (
    <Link href={`/projects/${id}`} className="block">
      <div className="max-w-sm bg-[#f8f4e9] dark:bg-[#32302f] border-2 border-[#d7c4a1] dark:border-[#504945] rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-xl font-semibold text-[#3c3836] dark:text-[#ebdbb2] mb-2">{title}</h3>
        <p className="text-[#504945] dark:text-[#d5c4a1] mb-4 line-clamp-2">{summary}</p>
        <div className="flex justify-between items-center text-sm text-[#7c6f64] dark:text-[#a89984]">
          <span>{nodeCount} nodes</span>
          <span>{dateModified}</span>
        </div>
      </div>
    </Link>
  );
} 