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
        <Panel position="top-left" className="font-medium text-[#3c3836] dark:text-[#ebdbb2]">
          Project Graph
        </Panel>
      </ReactFlow>
    </div>
  );
} 