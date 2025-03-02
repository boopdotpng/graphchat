'use client';

import { useCallback } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Link from 'next/link';

const initialNodes: Node[] = [
  {
    id: 'start',
    position: { x: 100, y: 300 },
    data: { label: 'Start' },
    type: 'input',
  },
];

const initialEdges: Edge[] = [];

export default function ProjectPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: any) => {
    setEdges((eds) => addEdge(params, eds));
  }, [setEdges]);

  return (
    <div className="w-full h-full bg-[#f8f4e9] dark:bg-[#32302f]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className="w-full h-full"
        minZoom={0.1}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
      >
        <Background color="#504945" gap={16} />
        <Controls 
          className="bg-[#ebdbb2] dark:bg-[#3c3836] border-2 border-[#d7c4a1] dark:border-[#504945] rounded-lg"
          position="bottom-right"
          showInteractive={false}
        />
        <Panel position="top-left" className="flex items-center gap-4">
          <Link 
            href="/projects" 
            className="flex items-center justify-center w-10 h-10 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-md transition-colors"
            title="Back to Projects"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <h1 className="font-bold text-xl text-[#3c3836] dark:text-[#ebdbb2] bg-[#f8f4e9]/80 dark:bg-[#32302f]/80 px-4 py-2 rounded-lg shadow-sm border border-[#d7c4a1] dark:border-[#504945]">
            Project Graph
          </h1>
        </Panel>
      </ReactFlow>
    </div>
  );
} 