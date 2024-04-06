/*
<script>
window.onload = function () {
var options = {
  exportEnabled: true,
  animationEnabled: true,
  title:{
    text: "Monthly Average Temperature Variation in Tokyo"
  },    
  axisX: {
    valueFormatString: "MMMM"
  },
  axisY: { 
    title: "Temperature (°C)",
    suffix: " °C"
  },
  data: [{
    type: "rangeSplineArea",
    indexLabel: "{y[#index]}°",
    xValueFormatString: "MMM YYYY",
    toolTipContent: "<b>{x}</b> </br> Min: {y[0]} °C, Max: {y[1]} °C",
    dataPoints: [
      { x: new Date(2016, 00, 01), y: [4, 16] },
      { x: new Date(2016, 01, 01), y: [7, 23] },
      { x: new Date(2016, 02, 01), y: [6, 21] },
      { x: new Date(2016, 03, 01), y: [13, 27] },
      { x: new Date(2016, 04, 01), y: [18, 31] },
      { x: new Date(2016, 05, 01), y: [19, 33] },
      { x: new Date(2016, 06, 01), y: [22, 37] },
      { x: new Date(2016, 07, 01), y: [24, 37] },
      { x: new Date(2016, 08, 01), y: [20, 33] },
      { x: new Date(2016, 09, 01), y: [13, 32] },
      { x: new Date(2016, 10, 01), y: [3, 21] },
      { x: new Date(2016, 11, 01), y: [8, 20] }
    ]
  }]
};
$("#chartContainer").CanvasJSChart(options);

}
</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>



<script>
window.onload = function () {

var options = {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Actual vs Projected Sales"
  },
  axisX:{
    valueFormatString: "DD MMM"
  },
  axisY: {
    title: "Number of Sales",
    suffix: "K",
    minimum: 30
  },
  toolTip:{
    shared:true
  },  
  legend:{
    cursor:"pointer",
    verticalAlign: "bottom",
    horizontalAlign: "left",
    dockInsidePlotArea: true,
    itemclick: toogleDataSeries
  },
  data: [{
    type: "line",
    showInLegend: true,
    name: "Projected Sales",
    markerType: "square",
    xValueFormatString: "DD MMM, YYYY",
    color: "#F08080",
    yValueFormatString: "#,##0K",
    dataPoints: [
      { x: new Date(2017, 10, 1), y: 63 },
      { x: new Date(2017, 10, 2), y: 69 },
      { x: new Date(2017, 10, 3), y: 65 },
      { x: new Date(2017, 10, 4), y: 70 },
      { x: new Date(2017, 10, 5), y: 71 },
      { x: new Date(2017, 10, 6), y: 65 },
      { x: new Date(2017, 10, 7), y: 73 },
      { x: new Date(2017, 10, 8), y: 96 },
      { x: new Date(2017, 10, 9), y: 84 },
      { x: new Date(2017, 10, 10), y: 85 },
      { x: new Date(2017, 10, 11), y: 86 },
      { x: new Date(2017, 10, 12), y: 94 },
      { x: new Date(2017, 10, 13), y: 97 },
      { x: new Date(2017, 10, 14), y: 86 },
      { x: new Date(2017, 10, 15), y: 89 }
    ]
  },
  {
    type: "line",
    showInLegend: true,
    name: "Actual Sales",
    lineDashType: "dash",
    yValueFormatString: "#,##0K",
    dataPoints: [
      { x: new Date(2017, 10, 1), y: 60 },
      { x: new Date(2017, 10, 2), y: 57 },
      { x: new Date(2017, 10, 3), y: 51 },
      { x: new Date(2017, 10, 4), y: 56 },
      { x: new Date(2017, 10, 5), y: 54 },
      { x: new Date(2017, 10, 6), y: 55 },
      { x: new Date(2017, 10, 7), y: 54 },
      { x: new Date(2017, 10, 8), y: 69 },
      { x: new Date(2017, 10, 9), y: 65 },
      { x: new Date(2017, 10, 10), y: 66 },
      { x: new Date(2017, 10, 11), y: 63 },
      { x: new Date(2017, 10, 12), y: 67 },
      { x: new Date(2017, 10, 13), y: 66 },
      { x: new Date(2017, 10, 14), y: 56 },
      { x: new Date(2017, 10, 15), y: 64 }
    ]
  }]
};
$("#chartContainer").CanvasJSChart(options);

function toogleDataSeries(e){
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else{
    e.dataSeries.visible = true;
  }
  e.chart.render();
}

}
</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script> */