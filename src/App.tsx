import React from "react";
import Tree from "react-d3-tree";

import { useCenteredTree } from "./helpers";
import "./custom-tree.css";
import data from "./data.json";

const containerStyles = {
  width: "100vw",
  height: "100vh"
};

const orgChartJson = {
  name: 'Growth',
  attributes: {
        amount: '100$',
      },
  children: [
    {
      name: 'New Clients',
      attributes: {
        amount: '100$',
      },
      children: [
        {
          name: 'Benefits',
          attributes: {
            amount: '100$',
          },
          children: [
            {
              name: 'Cash',
			   attributes: {
					amount: '100$',
				}
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            amount: '100$',
          },
          children: [
            {
              name: 'Worker',
			   attributes: {
				amount: '100$',
				}
            },
          ],
        },
      ],
    },
  ],
};

// @ts-ignore
function addCircles(name,depth,toggleNode,children)
{
	console.log('name function',children);
	console.log('toggleNode function',toggleNode);
	// @ts-ignore
	var svgns = "http://www.w3.org/2000/svg";
	// @ts-ignore
    var container = document.getElementById(name);
	// @ts-ignore
	var div1 = document.getElementById("d"+name);
	// @ts-ignore
	var classname= div1.className;
	if(classname!="no-level")
	{
		// @ts-ignore
		var cyc=-30;
		// @ts-ignore
		if(children!=undefined)
		{
			if(document.getElementById( name+'circle0' )==null)
			{
				for(let i=0; i<children.length; i++)
				{
					// @ts-ignore
					var circle = document.createElementNS(svgns, 'circle');
					// @ts-ignore
			circle.setAttributeNS(null, 'cx', 220);
			// @ts-ignore
			circle.setAttributeNS(null, 'id', name+'circle'+i);
			// @ts-ignore
			circle.setAttributeNS(null, 'cy', cyc);
			// @ts-ignore
			circle.setAttributeNS(null, 'r', 15); 
			// @ts-ignore
			circle.setAttributeNS(null, 'style', 'fill: white; stroke: black; stroke-width: 1px;' );
			// @ts-ignore
			circle.onclick = function(){toggleNode()};
			// @ts-ignore
			var text = document.createElementNS(svgns, 'text');
			// @ts-ignore
			text.setAttributeNS(null, 'id', name+'text'+i);
			// @ts-ignore
			text.setAttributeNS(null, 'text-anchor', 'middle');
			// @ts-ignore
			text.setAttributeNS(null, 'y', cyc);
			// @ts-ignore
			text.setAttributeNS(null, 'x', 220);
			// @ts-ignore
			text.setAttributeNS(null, 'font-size', '5px');
			// @ts-ignore
			text.setAttributeNS(null, 'font-weight', 100);
			// @ts-ignore
			text.innerHTML=children[i].name;
			// @ts-ignore
			//circle.appendChild(text);
			// @ts-ignore
			container.appendChild(circle);
			// @ts-ignore
			container.appendChild(text);
			cyc=cyc+30;
				}
			}
			else{
				for(let i=0; i<children.length; i++)
				{
					// @ts-ignore
					document.getElementById( name+'circle'+i ).style.display="block";
					// @ts-ignore
					document.getElementById( name+'text'+i ).style.display="block";
				}
			}
		}
	
	// @ts-ignore
	div1.classList.remove("level-"+depth);
	// @ts-ignore
	div1.classList.add("no-level");
	
		// @ts-ignore
	var p1 = document.getElementById("p"+name);
	// @ts-ignore
	p1.classList.remove("p-class");
	// @ts-ignore
	p1.classList.add("p1-class");
	
		// @ts-ignore
	var h1 = document.getElementById("h"+name);
	// @ts-ignore
	h1.classList.remove("h-class");
	// @ts-ignore
	h1.classList.add("h1-class");
	
	// @ts-ignore
	var t1 = document.getElementById("t"+name);
	// @ts-ignore
	t1.classList.remove("triangle-top");
	// @ts-ignore
	t1.classList.add("triangle-top1");
	
	// @ts-ignore
	var p10 = document.getElementById("10"+name);
	// @ts-ignore
	p10.classList.remove("move");
	// @ts-ignore
	p10.classList.add("move1");
	
	// @ts-ignore
	var c = document.getElementById("circle"+name);
	// @ts-ignore
	c.classList.remove("c");
	// @ts-ignore
	c.classList.add("c1");
	
	// @ts-ignore
	var text = document.getElementById("text"+name);
	// @ts-ignore
	text.classList.remove("c");
	// @ts-ignore
	text.classList.add("c1");
	// @ts-ignore
	text.innerHTML="-";
	}
	else{
		// @ts-ignore
		if(children!=undefined)
		{
			// @ts-ignore
			if(children.length>0)
			{
		for(let i=0; i<children.length; i++)
				{
					// @ts-ignore
					document.getElementById( name+'circle'+i ).style.display="none";
					// @ts-ignore
					document.getElementById( name+'text'+i ).style.display="none";
					console.log('coming here');
				}
			}
			else
			{
				// @ts-ignore
					document.getElementById( name+'circle0' ).style.display="none";
			}
		}
		// @ts-ignore
	div1.classList.remove("no-level");
	// @ts-ignore
	div1.classList.add("level-"+depth);
	
		// @ts-ignore
	var p1 = document.getElementById("p"+name);
	// @ts-ignore
	p1.classList.remove("p1-class");
	// @ts-ignore
	p1.classList.add("p-class");
	
		// @ts-ignore
	var h1 = document.getElementById("h"+name);
	// @ts-ignore
	h1.classList.remove("h1-class");
	// @ts-ignore
	h1.classList.add("h-class");
	
	// @ts-ignore
	var t1 = document.getElementById("t"+name);
	// @ts-ignore
	t1.classList.remove("triangle-top1");
	// @ts-ignore
	t1.classList.add("triangle-top");
	
	// @ts-ignore
	var p10 = document.getElementById("10"+name);
	// @ts-ignore
	p10.classList.remove("move1");
	// @ts-ignore
	p10.classList.add("move");
	
	// @ts-ignore
	var c = document.getElementById("circle"+name);
	// @ts-ignore
	c.classList.remove("c1");
	// @ts-ignore
	c.classList.add("c");
	
	// @ts-ignore
	var text = document.getElementById("text"+name);
	// @ts-ignore
	text.classList.remove("c1");
	// @ts-ignore
	text.classList.add("c");
	// @ts-ignore
	text.innerHTML="+";
	}
}








// @ts-ignore
function transition(name,depth,toggleNode,children,collapse)
{
	console.log('name function',children);
	console.log('toggleNode function',toggleNode);
	// @ts-ignore
	var svgns = "http://www.w3.org/2000/svg";
	// @ts-ignore
    var container = document.getElementById(name);
	// @ts-ignore
	var div1 = document.getElementById("d"+name);
	// @ts-ignore
	var classname= div1.className;
	if(collapse==true)
	{
	
	
	// @ts-ignore
	div1.classList.remove("level-"+depth);
	// @ts-ignore
	div1.classList.add("no-level");
	
		// @ts-ignore
	var p1 = document.getElementById("p"+name);
	// @ts-ignore
	p1.classList.remove("p-class");
	// @ts-ignore
	p1.classList.add("p1-class");
	
		// @ts-ignore
	var h1 = document.getElementById("h"+name);
	// @ts-ignore
	h1.classList.remove("h-class");
	// @ts-ignore
	h1.classList.add("h1-class");
	
	// @ts-ignore
	var t1 = document.getElementById("t"+name);
	// @ts-ignore
	t1.classList.remove("triangle-top");
	// @ts-ignore
	t1.classList.add("triangle-top1");
	
	// @ts-ignore
	var p10 = document.getElementById("10"+name);
	// @ts-ignore
	p10.classList.remove("move");
	// @ts-ignore
	p10.classList.add("move1");
	
	// @ts-ignore
	var c = document.getElementById("circle"+name);
	// @ts-ignore
	c.classList.remove("c");
	// @ts-ignore
	c.classList.add("c1");
	
	// @ts-ignore
	var text = document.getElementById("text"+name);
	// @ts-ignore
	text.classList.remove("c");
	// @ts-ignore
	text.classList.add("c1");
	// @ts-ignore
	text.innerHTML="-";
	
	toggleNode();
	}
	else{
		// @ts-ignore
		// @ts-ignore
	div1.classList.remove("no-level");
	// @ts-ignore
	div1.classList.add("level-"+depth);
	
		// @ts-ignore
	var p1 = document.getElementById("p"+name);
	// @ts-ignore
	p1.classList.remove("p1-class");
	// @ts-ignore
	p1.classList.add("p-class");
	
		// @ts-ignore
	var h1 = document.getElementById("h"+name);
	// @ts-ignore
	h1.classList.remove("h1-class");
	// @ts-ignore
	h1.classList.add("h-class");
	
	// @ts-ignore
	var t1 = document.getElementById("t"+name);
	// @ts-ignore
	t1.classList.remove("triangle-top1");
	// @ts-ignore
	t1.classList.add("triangle-top");
	
	// @ts-ignore
	var p10 = document.getElementById("10"+name);
	// @ts-ignore
	p10.classList.remove("move1");
	// @ts-ignore
	p10.classList.add("move");
	
	// @ts-ignore
	var c = document.getElementById("circle"+name);
	// @ts-ignore
	c.classList.remove("c1");
	// @ts-ignore
	c.classList.add("c");
	
	// @ts-ignore
	var text = document.getElementById("text"+name);
	// @ts-ignore
	text.classList.remove("c1");
	// @ts-ignore
	text.classList.add("c");
	// @ts-ignore
	text.innerHTML="+";
	toggleNode();
	}
}



// Here we're using `renderCustomNodeElement` render a component that uses
// both SVG and HTML tags side-by-side.
// This is made possible by `foreignObject`, which wraps the HTML tags to
// allow for them to be injected into the SVG namespace.
 // {nodeDatum.children && ( // )}
	// @ts-ignore
function renderForeignObjectNode  ({
		// @ts-ignore
  nodeDatum,
  	// @ts-ignore
  toggleNode,
  	// @ts-ignore
  foreignObjectProps
})  
{
	console.log('nodeDatum',nodeDatum);
	console.log('toggleNode',toggleNode);
	console.log('foreignObjectProps',foreignObjectProps);
	return(
  <g id={nodeDatum.name}>
   
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject {...foreignObjectProps} >
      <div id={'d'+nodeDatum.name} className={"level-"+nodeDatum.__rd3t.depth}  >
	  <p id={'p'+nodeDatum.name} className={"p-class"} >{nodeDatum.name}</p>
        <h3 id={'h'+nodeDatum.name} className={"h-class"} onClick={()=>transition(nodeDatum.name,nodeDatum.__rd3t.depth,toggleNode,nodeDatum.children,nodeDatum.__rd3t.collapsed)}>{nodeDatum.attributes.amount}</h3>
		<div id={'t'+nodeDatum.name} className={"triangle-top"}></div>
		 <p id={'10'+nodeDatum.name} className={'move'} >10%</p>
		<svg height="20" width="20" style={{position:"relative",top:"-159",left:"205"}}>
  <circle id={'circle'+nodeDatum.name} cx="10" cy="10" r="10" className={"c"} strokeWidth="2" fill="transparent"  onClick={()=>addCircles(nodeDatum.name,nodeDatum.__rd3t.depth,toggleNode,nodeDatum.children)}/>
  <text x="10" y="10" 
          text-anchor="middle"
          className={"c"}
          stroke-width="1px"
          alignment-baseline="middle"
		  id={'text'+nodeDatum.name}
		  onClick={()=>addCircles(nodeDatum.name,nodeDatum.__rd3t.depth,toggleNode,nodeDatum.children)}
          > +
    </text>
</svg>
       
      </div>
	  
    </foreignObject>
  </g>
 
)
};


// @ts-ignore
 const straightPathFunc = (linkDatum, orientation) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.y},${source.x}L${target.y},${target.x}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  };

const data1:number=300;
export default function App() {
  const [translate, containerRef] = useCenteredTree();
  const nodeSize = { x: 250, y: 130 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: -30 ,y:-50 };
  return (
    <div style={containerStyles}
		// @ts-ignore
	ref={containerRef}>
      <Tree
        data={data}
			// @ts-ignore
        translate={translate}
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })

        }
		
        orientation="horizontal"
		rootNodeClassName="paren"
        branchNodeClassName="chil"
        leafNodeClassName="lea"
		// @ts-ignore
		depthFactor={350}
		zoomable={true}
		collapsible={true}
      />
    </div>
  );
}
