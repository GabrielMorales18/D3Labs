/*
*    main.js
*/

/*
d3.csv("data/ages.csv").then((data)=> {

	console.log(data);

});

d3.tsv("data/ages.tsv").then((data)=> {

	console.log(data);

});

d3.json("data/ages.json").then((data)=> {

	console.log(data);

});
*/

var ageArray = [];

d3.json("data/ages.json").then((data)=> {
	data.forEach((d, i)=>{
		d.age = +d.age;
        ageArray.push(d.age)
	});
	console.log(data);
    console.log(ageArray);

    var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

    console.log(ageArray);
    var circles = svg.selectAll("circle")
        .data(ageArray);

    circles.enter()
        .append("circle")
            .attr("cx", (d,i) => { return (i * 70) + 35})
            .attr("cy", 150)
            .attr("r", (d) => { return d*3; })
            .attr("fill",(d) => { 
                if(d > 10){
                    return ("red");
                } else {
                    return ("gray");
                }
            });
    }).catch((error) => {
        console.log(error);
    });
