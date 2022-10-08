function createChart(canvas, xyFunction, xAxisText, yAxisText, minY, maxY) {
  return new Chart(canvas, {
    type: 'scatter',
    data: {
      datasets: [{
        data: createData(xyFunction),
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          title: {
            display: true,
            text: xAxisText
          }
        },
        y: {
          type: 'linear',
          min: minY,
          max: maxY,
          title: {
            display: true,
            text: yAxisText
          }
        }
      },
      showLine: true,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function createData(xyFunction) {
  let data = [];
  for (var x = -10; x <= 60; x+=5)
  {
     data.push({ x: x, y: xyFunction(x) });
	 console.log("x=" + x + " y= " + xyFunction(x));
  }
  return data;
}

