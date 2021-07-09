import React, { useCallback, useState, useEffect } from "react";
import Tree from "react-d3-tree";
import './custom-tree.css';





const mindChart = {
  name: "Training Map",
  children: [
    {
      name: "Frontend Path",

      children: [
        {
          name: "ReactJS",
          img:
            "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",

          children: [
            {
              name: "Redux",
              img:
                "https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",
            },
          ],
        },
        {
          name: "JavaScript",
          img: "https://alessiodoria.it/wp-content/uploads/2018/07/js.jpg",

          children: [
            {
              name: "ES6",
              img:
                "https://cdn-images-1.medium.com/max/640/1*SL4sWHdjGR3vo0x5ta3xfw.jpeg",
            },
          ],
        },
        {
          name: "CSS",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNf63VPpifCtCP4BkS6Saogwh23753UtB-I9X5xlYW2764afhQsSwN8DbQp_ic-7ksAg&usqp=CAU",

          children: [
            {
              name: "Bootstrap",
              img:
                "https://i1.wp.com/www.techcoffees.com/wp-content/uploads/2018/02/bootstrap-wallpaper.png?ssl=1",
            },
          ],
        },
        {
          name: "HTML5",
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0Ava7fWsDfsUECKqGkXDObtqkapVrUcyxA&usqp=CAU",
          children: [
            {
              name: "Semantics",
              img:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQqGsLJaEQeWwoyqqNPK5LlhvCxlmUJpYRg&usqp=CAU",
            },
          ],
        },
      ],
    },
  ],
};

const containerStyles = {
  width: "100vw",
  height: "80vh",
};




const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 5 });
    }
  }, []);
  return [translate, containerRef];
};

const MindMap = () => {
  const [translate, containerRef] = useCenteredTree();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // @ts-ignore
function addCircles1 (d,handleShow){

	
	var svgns = "http://www.w3.org/2000/svg",
    container = document.getElementById( d );


	if(document.getElementById( d+'circle1' )==null)
	{
		
        var circle = document.createElementNS(svgns, 'circle');
		// @ts-ignore
        circle.setAttributeNS(null, 'cx', 40);
		// @ts-ignore
        circle.setAttributeNS(null, 'id', d+'circle1');
		// @ts-ignore
        circle.setAttributeNS(null, 'cy', -30);
		// @ts-ignore
        circle.setAttributeNS(null, 'r', 10); 
        circle.setAttributeNS(null, 'style', 'fill: white; stroke: black; stroke-width: 1px;' );
		// @ts-ignore
		circle.onclick = function(){handleShow(true)};
		// @ts-ignore
        container.appendChild(circle);
		
		
		var circle2 = document.createElementNS(svgns, 'circle');
		// @ts-ignore
        circle2.setAttributeNS(null, 'cx', 70);
		// @ts-ignore
		 circle2.setAttributeNS(null, 'id', d+'circle2');
		 // @ts-ignore
        circle2.setAttributeNS(null, 'cy', -30);
		// @ts-ignore
        circle2.setAttributeNS(null, 'r', 10); 
        circle2.setAttributeNS(null, 'style', 'fill: blue; stroke: black; stroke-width: 1px;' );
		// @ts-ignore
		circle2.onclick = function() { alert('blah1'); };
		// @ts-ignore
        container.appendChild(circle2);
		
		var circle3 = document.createElementNS(svgns, 'circle');
		// @ts-ignore
        circle3.setAttributeNS(null, 'cx', 100);
		// @ts-ignore
		 circle3.setAttributeNS(null, 'id', d+'circle3');
		 // @ts-ignore
        circle3.setAttributeNS(null, 'cy', -30);
		// @ts-ignore
        circle3.setAttributeNS(null, 'r', 10); 
        circle3.setAttributeNS(null, 'style', 'fill: green; stroke: black; stroke-width: 1px;' );
		// @ts-ignore
		circle3.onclick = function() { alert('blah2'); };
		// @ts-ignore
        container.appendChild(circle3);
	}
	else
	{
		// @ts-ignore
		var circle1=document.getElementById( d+'circle1' );
		// @ts-ignore
		var circle2=document.getElementById( d+'circle2' );
		// @ts-ignore
		var circle3=document.getElementById( d+'circle3' );
		// @ts-ignore
		var style1=circle1.style.display;
		// @ts-ignore
		var style2=circle2.style.display;
		// @ts-ignore
		var style3=circle3.style.display;
		// @ts-ignore
		// d3.selectAll('circle').style('display','none');
		if(style1=='none')
		{
			// @ts-ignore
			circle1.style.display='block';
		}
		else{
			// @ts-ignore
			circle1.style.display='none';
		}
		
		if(style2=='none')
		{
			// @ts-ignore
			circle2.style.display='block';
		}
		else{
			// @ts-ignore
			circle2.style.display='none';
		}
		
		if(style3=='none')
		{
			// @ts-ignore
			circle3.style.display='block';
		}
		else{
			// @ts-ignore
			circle3.style.display='none';
		}
	}

}

// @ts-ignore
function renderRectSvgNode ({nodeDatum, handleShow, toggleNode})
{

return (
  <g id={nodeDatum.name}>

    <rect
		id="rect"
      width="200"
      height="80"
      x="-10"

      rx="15"
	  onClick={()=>addCircles1(nodeDatum.name,setShow)}
	  
      
    />
 
    <image
      href={nodeDatum.img}
      transform="translate(130, 15)"
      width="56"
      height="56"
      preserveAspectRatio="xMidYMin slice"
      clip-path="url(#clipCircle)"
    />
    <text fill="#0099ff;" strokeWidth="1" x="20" y="40" onClick={toggleNode} >
      {nodeDatum.name}
    </text>
    {nodeDatum.attributes?.course && (
      <text fill="#0099ff;" x="20" dy="20" strokeWidth="1">
        - : {nodeDatum.attributes?.course}
      </text>
    )}

	
  </g>
	);
}

  return (
    <>
	
        <div style={containerStyles} 
		// @ts-ignore
		ref={containerRef}>
          <Tree
            data={mindChart}
            onNodeClick={()=>alert(123)}
			// @ts-ignore
            translate={translate}
            renderCustomNodeElement={(rd3tProps) =>
              renderRectSvgNode({ ...rd3tProps, handleShow })
            }
            orientation="horizontal"
            pathClassFunc={() => ["custom-link", "extra-custom-link"].join(" ")}
			 rootNodeClassName="node__root1"
        branchNodeClassName="node__branch1"
        leafNodeClassName="node__leaf1"
           
          />
        </div>

		
    </>
  );
};

export default MindMap;
