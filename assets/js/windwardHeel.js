const sailForceVsWindwardHeelAngleCanvas = document.getElementById('sailForceVsWindwardHeelAngleCanvas');
const sailForceVsWindwardHeelAngleChart = createChart(
  sailForceVsWindwardHeelAngleCanvas, 
  sailForceVsWindwardHeelAngle, 
  'heel angle [°]',
  'sail force [N]',
  200,
  700)

const horizontalFoilForceVsWindwardHeelAngleCanvas = document.getElementById('horizontalFoilForceVsWindwardHeelAngleCanvas');
const horizontalFoilForceVsWindwardHeelAngleChart = createChart(
  horizontalFoilForceVsWindwardHeelAngleCanvas, 
  horizontalFoilForceVsWindwardHeelAngle, 
  'heel angle [°]',
  'horizontal foil force [N]',
  400,
  1400)

const verticalFoilForceVsWindwardHeelAngleCanvas = document.getElementById('verticalFoilForceVsWindwardHeelAngleCanvas');
const verticalFoilForceVsWindwardHeelAngleChart = createChart(
  verticalFoilForceVsWindwardHeelAngleCanvas, 
  verticalFoilForceVsWindwardHeelAngle, 
  'heel angle [°]',
  'vertical foil force [N]',
  -600,
  600)

function sailForceVsWindwardHeelAngle(x) {
  let F_w_h = Number(document.getElementById('F_w_h').value);
  let F_w_b = Number(document.getElementById('F_w_b').value);
  let w_cog_h = Number(document.getElementById('w_cog_h').value);
  let h_coe_s = Number(document.getElementById('h_coe_s').value);
  let h_cog_b = Number(document.getElementById('h_cog_b').value);
  let h_cog_h = Number(document.getElementById('h_cog_h').value);
  let y = Math.cos(x*Math.PI/180)*F_w_h * w_cog_h/h_coe_s +Math.sin(x*Math.PI/180)*(F_w_b*h_cog_b+F_w_h*h_cog_h)/h_coe_s;
  return y;
}

function horizontalFoilForceVsWindwardHeelAngle(x) {
  let F_w_h = Number(document.getElementById('F_w_h').value);
  let F_w_b = Number(document.getElementById('F_w_b').value);
  let y = Math.cos(x*Math.PI/180)*(F_w_h + F_w_b);
  return y;
}

function verticalFoilForceVsWindwardHeelAngle(x) {
  let F_w_h = Number(document.getElementById('F_w_h').value);
  let F_w_b = Number(document.getElementById('F_w_b').value);
  let y = sailForceVsWindwardHeelAngle(x) - Math.sin(x*Math.PI/180)*(F_w_h + F_w_b);
  return y;
}

function resetValues(x) {
  document.getElementById('F_w_h').value = 800;
  document.getElementById('F_w_b').value = 400;
  document.getElementById('w_cog_h').value = 1.3;
  document.getElementById('h_coe_s').value = 3.6;
  document.getElementById('h_cog_b').value = 1.3;
  document.getElementById('h_cog_h').value = 1.5;
  recalculate();
}

function recalculate() {
  recalculateSailForceVsWindwardHeelAngle();
  recalculateHorizontalFoilForceVsWindwardHeelAngle();
  recalculateVerticalFoilForceVsWindwardHeelAngle();
}

function recalculateSailForceVsWindwardHeelAngle() {
  sailForceVsWindwardHeelAngleChart.data.datasets[0].data = createData(sailForceVsWindwardHeelAngle);
  sailForceVsWindwardHeelAngleChart.update();
}

function recalculateHorizontalFoilForceVsWindwardHeelAngle() {
  horizontalFoilForceVsWindwardHeelAngleChart.data.datasets[0].data = createData(horizontalFoilForceVsWindwardHeelAngle);
  horizontalFoilForceVsWindwardHeelAngleChart.update();
}

function recalculateVerticalFoilForceVsWindwardHeelAngle() {
  verticalFoilForceVsWindwardHeelAngleChart.data.datasets[0].data = createData(verticalFoilForceVsWindwardHeelAngle);
  verticalFoilForceVsWindwardHeelAngleChart.update();
}
