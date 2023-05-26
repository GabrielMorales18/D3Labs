/*
*    main.js
*/

const svg = d3.select("#chart-area").append("svg")
    .attr('width', 800)
    .attr('height', 600);
  
  d3.json('data/buildings.json').then((data) => {
    const buildingsData = data.map((d) => +d.height);
  
    var x = d3.scaleBand()
      .domain(buildingsData)
      .range([0, 500]) //with 400 the chart was overlapping
      .paddingInner(0.3)
      .paddingOuter(0.3);
  
    var y = d3.scaleLinear()
      .domain([0, 828])
      .range([0, 400]);

    var color = d3.scaleOrdinal()
      .domain(buildingsData)
      .range(d3.schemeSet3);
  
    var rects = svg.selectAll('rect')
      .data(buildingsData)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d))
      .attr('y', (d) => 600 - y(d))
      .attr('width', 50)
      .attr('height', (d) => y(d))
      .attr('fill', (d) => color(d*2));
  }).catch((error) => {
    console.log(error);
  });
  