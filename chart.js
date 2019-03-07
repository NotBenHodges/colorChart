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
        return height - d.num * 20;
      })
      .attr("width",barWidth)
      .attr("height",function(d)
      {
        return d.num * 20;
      })
      .attr("fill",function(d)
    {
      return d.color;
    })

var text = svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .text(function(d){
      return d.num;
    })
    .attr("x",function(d,i){
      return i * (width / data.length)+43;
    })
    .attr("y",function(d){
      return height - (d.num * 20)+15;
    })
    .attr("fill","white");

    var legend = svg.append("rect")
        .attr("class","legend")
        .attr("height","100")
        .attr("width","150")
        .attr("x", "425")
        .attr("y", "50")
        .attr("fill","transparent")
        .attr("stroke","black")
        .attr("stroke-width", "2px");

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","430")
        .attr("y","55")
        .attr("fill","blue")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","430")
        .attr("y","75")
        .attr("fill","green")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","430")
        .attr("y","95")
        .attr("fill","red")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","430")
        .attr("y","115")
        .attr("fill","black")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","500")
        .attr("y","55")
        .attr("fill","purple")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","500")
        .attr("y","75")
        .attr("fill","gold")

    var box = svg.append("rect")
        .attr("height","15")
        .attr("width","15")
        .attr("x","500")
        .attr("y","95")
        .attr("fill","teal")

    var name = svg.append("text")
        .text("blue")
        .attr("x","450")
        .attr("y","65")

    var name = svg.append("text")
        .text("green")
        .attr("x","450")
        .attr("y","85")

    var name = svg.append("text")
        .text("red")
        .attr("x","450")
        .attr("y","105")

    var name = svg.append("text")
        .text("black")
        .attr("x","450")
        .attr("y","125")

    var name = svg.append("text")
        .text("purple")
        .attr("x","520")
        .attr("y","65")

    var name = svg.append("text")
        .text("gold")
        .attr("x","520")
        .attr("y","85")

    var name = svg.append("text")
        .text("teal")
        .attr("x","520")
        .attr("y","105")
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
