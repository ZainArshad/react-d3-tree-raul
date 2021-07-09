import React from "react";
import Tree from "react-d3-tree";

import { useCenteredTree } from "./helpers";
import "./custom-tree.css";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};


const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};
// Here we're using `renderCustomNodeElement` to represent each node
// as an SVG `rect` instead of the default `circle`.
// @ts-ignore
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
  <g>
    <rect width="20" height="20" x="-10" onClick={toggleNode} />
    <text fill="black" strokeWidth="1" x="20">
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function App() {
  const [translate, containerRef] = useCenteredTree();
  return (
    <div style={containerStyles} 
	// @ts-ignore
	ref={containerRef}>
      <Tree
        data={orgChart}
		// @ts-ignore
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="horizontal"
        rootNodeClassName="parent"
        branchNodeClassName="child"
        leafNodeClassName="leaf"
      />
    </div>
  );
}
