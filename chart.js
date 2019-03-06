var colorDataP = d3.csv("colors.csv");
var drawChart = function(data)
{
  console.log(data);
  var height = 400;
  var width = 600;
  var barWidth = width/data.length;
  var svg = d3.select("body")
              .append("svg")
              .attr("height",height)
              .attr("width",width);

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x",function(d,i)
      {
        return i * barWidth;
      })
      .attr("y",function(d) {
        return height - d.num * 10;
      })
      .attr("width",barWidth)
      .attr("height",function(d)
      {
        return d.num * 10;
      })
      .attr("fill",function(d)
    {
      return d.color;
    })

  svg.select("rect").selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d)
    {
      return d.num;
    })
    .attr("x", function(d, i)
  {
    return i*(width/data.length);
  })
  .attr("y", function(d)
{
  return height-(d*10);
})

svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d;
    })
}

colorDataP.then(function(data)
{
  console.log("data", data);
  drawChart(data);
},
  function(err)
{
  console.log(err);
})
