var barData = {
  labels: ["2018", "2019", "2020"],
  series: [[10, 16, 29]],
};

var barOptions = {
  axisY: {
    offset: 60,
    scaleMinSpace: 50,
    labelInterpolationFnc: function (value) {
      return value + "명";
    },
  },
  width: "100%",
  height: "400px",
};

new Chartist.Bar(".bar-chart", barData, barOptions);
