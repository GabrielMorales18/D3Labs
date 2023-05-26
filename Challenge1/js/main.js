/*
*    main.js
*/
var heightArray = [];

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d, i)=>{
		d.height = +d.height;
        heightArray.push(d.height)
	});

    var svg = d3.select("#chart-area").append("svg")
	.attr("width", 650)
	.attr("height", 650);

    console.log(heightArray);
    var rects = svg.selectAll("rect")
        .data(heightArray);

    rects.enter()
        .append("rect")
            .attr("x", (d,i) => { return i * 50})
            .attr("y", (d) =>{
                var y = 850-d;
                return y;
            })
            .attr("width", 45)
            .attr("height", (d) =>{ return d; })
            .attr("fill","gray");
    }).catch((error) => {
        console.log(error);
    });
