let margin = {top: 20, right: 20, bottom: 70, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


// set the ranges
let x = d3.scale.ordinal().rangeRoundBands([0, width], .3);

let y = d3.scale.linear().range([height, 0.3]);

// define the axis
let xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


let yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(15);


// add the SVG element
let svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// load the data
d3.json("../JSON/output_1.json", function(error, data) {

    data.forEach(function(d) {
        d.CountryName = d.CountryName;
        d.Population_2013 = +d.Population_2013;
    });

  // scale the range of the data
  x.domain(data.map(function(d) { return d.CountryName; }));
  y.domain([0, d3.max(data, function(d) { return d.Population_2013; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");


  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.CountryName); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.Population_2013); })
      .attr("height", function(d) { return height - y(d.Population_2013); });


});
