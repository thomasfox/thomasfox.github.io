// The following values are read from the diagrams of the paper
// Pelletier and Mueller, Low Reynolds Number Aerodynamics of Low-Aspect-Ratio, Thin/Flat/Cambered-Plate Wings
// and are for RE 140000 and aspect ratio 1 and 2 (of both wings, i. e. 2 times the single wing aspect ratio), respectively.
// first column is angle of attack in degrees, second column is c_L or c_D respectively for that angle of attack
let cL_flatPlate_ar1 = [
  [-28.000, -0.8000],
  [-25.000, -0.8500],
  [-20.000, -0.7000],
  [-15.000, -0.5000],
  [-10.000, -0.2500],
  [-8.000,  -0.2000],
  [-6.000, -0.1500],
  [-3.000, -0.0750],
  [0.000, 0.000],
  [3.000, 0.0750],
  [6.000, 0.1500],
  [8.000, 0.2000],
  [10.000, 0.2500],
  [15.000, 0.5000],
  [20.000, 0.7000],
  [25.000,  0.8000],
  [28.000, 0.8000]]; 
  
let cD_flatPlate_ar1 = [
  [-28.000, 0.48000],
  [-25.000, 0.42000],
  [-20.000, 0.28000],
  [-15.000, 0.15000],
  [-10.000, 0.06000],
  [-8.000, 0.04000],
  [-6.000, 0.03000],
  [-3.000, 0.02000],
  [0.000, 0.01500],
  [3.000, 0.02000],
  [6.000, 0.03000],
  [8.000, 0.04000],
  [10.000, 0.06000],
  [15.000, 0.15000],
  [20.000, 0.28000],
  [25.000,  0.42000],
  [28.000, 0.48000]]; 
  
let cL_flatPlate_ar2 = [
  [-25.000, -0.6700],
  [-20.000, -0.7500],
  [-15.000, -0.7000],
  [-10.000, -0.5000],
  [-8.000,  -0.4000],
  [-6.000, -0.3000],
  [-3.000, -0.1500],
  [0.000, 0.000],
  [3.000, 0.1500],
  [6.000, 0.3000],
  [8.000, 0.4000],
  [10.000, 0.5000],
  [15.000, 0.7000],
  [20.000, 0.7500],
  [25.000,  0.6700]];

let cD_flatPlate_ar2 = [
  [-25.000, 0.33000],
  [-20.000, 0.28000],
  [-15.000, 0.18000],
  [-10.000, 0.08000],
  [-8.000,  0.06000],
  [-6.000, 0.03500],
  [-3.000, 0.02000],
  [0.000, 0.01500],
  [3.000, 0.02000],
  [6.000, 0.03500],
  [8.000, 0.06000],
  [10.000, 0.08000],
  [15.000, 0.18000],
  [20.000, 0.28000],
  [25.000,  0.33000]];
 

const angleOfAttackWindwardCanvas = document.getElementById('angleOfAttackWindwardCanvas');
const angleOfAttackWindwardChart = createChart(
  angleOfAttackWindwardCanvas, 
  angleOfAttackWindwardTrampInDeg, 
  'heel angle [°]',
  'angle of attack at windward tramp [°]',
  -15,
  25);
  
const angleOfAttackLeewardCanvas = document.getElementById('angleOfAttackLeewardCanvas');
const angleOfAttackLeewardChart = createChart(
  angleOfAttackLeewardCanvas, 
  angleOfAttackLeewardTrampInDeg, 
  'heel angle [°]',
  'angle of attack at leeward tramp [°]',
  -25,
  10);
  
const forceXCanvas = document.getElementById('forceXCanvas');
const forceXChart = createChart(
  forceXCanvas, 
  totalForceX, 
  'heel angle [°]',
  'x component of Force [N]',
  -10,
  30);

const forceYCanvas = document.getElementById('forceYCanvas');
const forceYChart = createChart(
  forceYCanvas, 
  totalForceY, 
  'heel angle [°]',
  'y component of Force [N]',
  0,
  200);
  
const forceZCanvas = document.getElementById('forceZCanvas');
const forceZChart = createChart(
  forceZCanvas, 
  totalForceZ, 
  'heel angle [°]',
  'z component of Force [N]',
  -200,
  150);

const torqueXCanvas = document.getElementById('torqueXCanvas');
const torqueXChart = createChart(
  torqueXCanvas, 
  totalTorqueX, 
  'heel angle [°]',
  'x component of Torque [Nm]',
  -400,
  150);

const forceXWindwardCanvas = document.getElementById('forceXWindwardCanvas');
const forceXWindwardChart = createChart(
  forceXWindwardCanvas, 
  forceXWindwardTramp, 
  'heel angle [°]',
  'x component of Force [N]',
  -10,
  10);

const forceYWindwardCanvas = document.getElementById('forceYWindwardCanvas');
const forceYWindwardChart = createChart(
  forceYWindwardCanvas, 
  forceYWindwardTramp, 
  'heel angle [°]',
  'y component of Force [N]',
  -10,
  200);
  
const forceZWindwardCanvas = document.getElementById('forceZWindwardCanvas');
const forceZWindwardChart = createChart(
  forceZWindwardCanvas, 
  forceZWindwardTramp, 
  'heel angle [°]',
  'z component of Force [N]',
  -100,
  100);

const torqueXWindwardCanvas = document.getElementById('torqueXWindwardCanvas');
const torqueXWindwardChart = createChart(
  torqueXWindwardCanvas, 
  torqueXWindwardTramp, 
  'heel angle [°]',
  'x component of Torque [Nm]',
  -200,
  150);

const forceXLeewardCanvas = document.getElementById('forceXLeewardCanvas');
const forceXLeewardChart = createChart(
  forceXLeewardCanvas, 
  forceXLeewardTramp, 
  'heel angle [°]',
  'x component of Force [N]',
  -10,
  10);

const forceYLeewardCanvas = document.getElementById('forceYLeewardCanvas');
const forceYLeewardChart = createChart(
  forceYLeewardCanvas, 
  forceYLeewardTramp, 
  'heel angle [°]',
  'y component of Force [N]',
  0,
  200);
  
const forceZLeewardCanvas = document.getElementById('forceZLeewardCanvas');
const forceZLeewardChart = createChart(
  forceZLeewardCanvas, 
  forceZLeewardTramp, 
  'heel angle [°]',
  'z component of Force [N]',
  -200,
  0);

const torqueXLeewardCanvas = document.getElementById('torqueXLeewardCanvas');
const torqueXLeewardChart = createChart(
  torqueXLeewardCanvas, 
  torqueXLeewardTramp, 
  'heel angle [°]',
  'x component of Torque [Nm]',
  -200,
  150);

function angleOfAttackWindwardTrampInDeg(heelAngleInDeg) {
  return angleOfAttackInDeg(gammaDashInRadWindwardTramp(heelAngleInDeg))
}

function angleOfAttackLeewardTrampInDeg(heelAngleInDeg) {
  return angleOfAttackInDeg(gammaDashInRadLeewardTramp(heelAngleInDeg))
}

function trampYWindward() {
  let w = Number(document.getElementById('w').value);
  return -w/4;
}

function trampYLeeward() {
  let w = Number(document.getElementById('w').value);
  return w/4;
}

function totalForceX(heelAngleInDeg) {
  let gammaDashWindward = gammaDashInRadWindwardTramp(heelAngleInDeg);
  let gammaDashLeeward = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDashWindward)[0] + aerodynamicForceVector(gammaDashLeeward)[0];
}

function totalForceY(heelAngleInDeg) {
  let gammaDashWindward = gammaDashInRadWindwardTramp(heelAngleInDeg);
  let gammaDashLeeward = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDashWindward)[1] + aerodynamicForceVector(gammaDashLeeward)[1];
}

function totalForceZ(heelAngleInDeg) {
  let gammaDashWindward = gammaDashInRadWindwardTramp(heelAngleInDeg);
  let gammaDashLeeward = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDashWindward)[2] + aerodynamicForceVector(gammaDashLeeward)[2];
}

function totalTorqueX(heelAngleInDeg) {
  let gammaDashWindward = gammaDashInRadWindwardTramp(heelAngleInDeg);
  let gammaDashLeeward = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return torqueX(heelAngleInDeg, gammaDashWindward, trampYWindward()) + torqueX(heelAngleInDeg, gammaDashLeeward, trampYLeeward());
}

function forceXWindwardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadWindwardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[0];
}

function forceYWindwardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadWindwardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[1];
}

function forceZWindwardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadWindwardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[2];
}

function torqueXWindwardTramp(heelAngleInDeg) {
  let gammaDashWindward = gammaDashInRadWindwardTramp(heelAngleInDeg);
  return torqueX(heelAngleInDeg, gammaDashWindward, trampYWindward());
}

function forceXLeewardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[0];
}

function forceYLeewardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[1];
}

function forceZLeewardTramp(heelAngleInDeg) {
  let gammaDash = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return aerodynamicForceVector(gammaDash)[2];
}

function torqueXLeewardTramp(heelAngleInDeg) {
  let gammaDashLeeward = gammaDashInRadLeewardTramp(heelAngleInDeg);
  return torqueX(heelAngleInDeg, gammaDashLeeward, trampYLeeward());
}

function angleOfAttackInDeg(gammaDashInRad) {
  let v_w_a = Number(document.getElementById('v_w_a').value);
  let beta = Number(document.getElementById('beta').value) * Math.PI / 180;
  let delta = Number(document.getElementById('delta').value) * Math.PI / 180;
  let sinAlpha = Math.sin(delta) * Math.cos(beta) + Math.sin(gammaDashInRad) * Math.cos(delta) * Math.sin(beta);
  // console.log("sinAlpha = " + sinAlpha);
  let alpha = Math.asin(sinAlpha)*180/Math.PI;
  return alpha;
}

function gammaDashInRadWindwardTramp(heelAngleInDeg) {
  let gamma = Number(document.getElementById('gamma').value) * Math.PI / 180;
  return gamma - heelAngleInDeg * Math.PI / 180;
}

function gammaDashInRadLeewardTramp(heelAngleInDeg) {
  let gamma = Number(document.getElementById('gamma').value) * Math.PI / 180;
  return - gamma - heelAngleInDeg * Math.PI / 180;
}

function calculateLiftNormalVector(gammaDashInRad) {
  let beta = Number(document.getElementById('beta').value) * Math.PI / 180;
  let delta = Number(document.getElementById('delta').value) * Math.PI / 180;
  let alpha = angleOfAttackInDeg(gammaDashInRad) * Math.PI / 180;
  // console.log("gamma_dash=" + (gammaDashInRad / Math.PI * 180) + ", beta = " + (beta / Math.PI * 180) + ", delta = " + (delta / Math.PI * 180) + ", alpha = " + (alpha / Math.PI * 180))
  let f_x = Math.sin(delta) - Math.sin(alpha) * Math.cos(beta)
  let f_y = Math.sin(gammaDashInRad) * Math.cos(delta) - Math.sin(alpha) * Math.sin(beta)
  let f_z = Math.cos(gammaDashInRad) * Math.cos(delta)
  let abs_f = Math.sqrt(f_x * f_x + f_y * f_y + f_z * f_z)
  // console.log("f_A = [" + (f_x / abs_f) + "," + (f_y / abs_f) + "," + (f_z / abs_f) + "]")
  return [f_x / abs_f, f_y / abs_f, f_z / abs_f]
}

function aerodynamicForceVector(gammaDashInRad) {
  let rho=1.2041 // kg/m^3, at 20°C
  let v_w_a = Number(document.getElementById('v_w_a').value);
  let A = Number(document.getElementById('A').value);
  let beta = Number(document.getElementById('beta').value) * Math.PI / 180;
  let factor = rho / 2 * v_w_a * v_w_a * A;
  // console.log("factor = " + factor)
  let alphaInDeg = angleOfAttackInDeg(gammaDashInRad);
  let c_L = interpolate(alphaInDeg, cL_flatPlate_ar2);
  let c_D = interpolate(alphaInDeg, cD_flatPlate_ar2);
  // console.log("alpha = " + alphaInDeg + ", c_L = " + c_L + ", c_D = " + c_D)
  let liftNormalVector = calculateLiftNormalVector(gammaDashInRad);
  let result = [factor * (c_D * Math.cos(beta) + c_L * liftNormalVector[0]),
          factor * (c_D * Math.sin(beta) + c_L * liftNormalVector[1]),
          factor * c_L * liftNormalVector[2]];
  // console.log("F = [" + result[0] 
  //        + "," + result[1]  
  //        + "," + result[2] )
  return result;
}

function torqueX(heelAngleInDeg, gammaDashInRad, trampY) {
  let lambda=heelAngleInDeg * Math.PI/180
  let h_w = Number(document.getElementById('h_w').value);
  // console.log("lambda = " + (lambda * 180 / Math.PI) + ", h_w = " + h_w + ", trampY = " + trampY + ", gamma_dash = " + (gammaDashInRad * 180 / Math.PI))
  let r_y = Math.cos(lambda) * trampY - Math.sin(lambda) * h_w;
  let r_z = Math.cos(lambda) * h_w + Math.sin(lambda) * trampY;
  // console.log("h_w = " + h_w + ", r_y = " + r_y + ", r_z = " + r_z)
  let F = aerodynamicForceVector(gammaDashInRad);
  // console.log("F = [" + F[0] 
  //        + "," + F[1]  
  //        + "," + F[2] )
  let result = r_y * F[2] - r_z * F[1];
  // console.log("torque_x = " + result); 
  return result;
}


/**
 * Returns the interpolated y value for a given x values and an array of x-y points.
 * @param {number} xToEnclose the x value to find the y value for
 * @param {Array} availableValues is an array of candidates of enclosing points 
 *        which are also reptesented as arrays of length 2.
 *        It is assumed that the x values of the points are ordered ascending.
 * @return {number} the y value, or null if no interpolation is possible
 */
function interpolate(xValue, knownValues) {
  // console.log("xValue =" + xValue);
  let enclosingPoints = getEnclosingForX(xValue, knownValues);
  if (enclosingPoints == null || enclosingPoints.length != 2)
  {
	return null;
  }
  let result = interpolateY(xValue, enclosingPoints[0], enclosingPoints[1]);
  return result;
}

function interpolateY(xValue, point1, point2) {
  // console.log("point1 =" + point1 + ", point2 =" + point2);
  if (point1[0] == point2[0])
  {
    return point1[1];
  }
  let relativeWeightOfCurrentValue = (xValue - point2[0]) / (point1[0] - point2[0]);
  let result = relativeWeightOfCurrentValue * point1[1] + (1 - relativeWeightOfCurrentValue) * point2[1];
  return result;
}

/**
 * Returns the enclosing points for a given x values and an array of x-y points.
 * @param {number} xToEnclose the x value to find the enclosing points for
 * @param {Array} availableValues is an array of candidates of enclosing points 
 *        which are also reptesented as arrays of length 2.
 *        It is assumed that the x values of the points are ordered ascending.
 * @return {Array} An array of length 2 containing lower and upper enclosing points.
 *        The enclosing points are also arrays of length 2 containing x and y values.
 */
function getEnclosingForX(xToEnclose, availableValues) {
  let lastValue = null;
  let lastX = null;
  let minEncounteredXValue = availableValues[0][0];
  let maxEncounteredXValue = minEncounteredXValue;

  for (currentValue of availableValues) {
    let currentX = currentValue[0];
    if (xToEnclose == currentX)
    {
      return [currentValue, currentValue];
    }

    minEncounteredXValue = Math.min(currentX, minEncounteredXValue);
    maxEncounteredXValue = Math.max(currentX, maxEncounteredXValue);

    if (lastValue == null) {
      lastValue = currentValue;
      lastX = currentX;
      continue;
    }

    let currentMinX = Math.min(currentX, lastX);
    let currentMaxX = Math.max(currentX, lastX);
    if (xToEnclose < currentMinX || xToEnclose > currentMaxX) {
      lastValue = currentValue;
      lastX = currentX;
      continue;
    }
    return [lastValue, currentValue];
  }
  return null;
}

function resetValues() {
  document.getElementById('v_w_a').value = 12;
  document.getElementById('beta').value = 22;
  document.getElementById('gamma').value = 20;
  document.getElementById('delta').value = 0;
  recalculate();
}

function recalculate() {
  recalculateAngleOfAttackWindward();
  recalculateAngleOfAttackLeeward();
  recalculateForceX();
  recalculateForceY();
  recalculateForceZ();
  recalculateTorqueX();
  recalculateForceXWindwardTramp();
  recalculateForceYWindwardTramp();
  recalculateForceZWindwardTramp();
  recalculateTorqueXWindwardTramp();
  recalculateForceXLeewardTramp();
  recalculateForceYLeewardTramp();
  recalculateForceZLeewardTramp();
  recalculateTorqueXLeewardTramp();
}

function recalculateAngleOfAttackWindward() {
  angleOfAttackWindwardChart.data.datasets[0].data = createData(angleOfAttackWindwardTrampInDeg);
  angleOfAttackWindwardChart.update();
}

function recalculateAngleOfAttackLeeward() {
  angleOfAttackLeewardChart.data.datasets[0].data = createData(angleOfAttackLeewardTrampInDeg);
  angleOfAttackLeewardChart.update();
}

function recalculateForceX() {
  forceXChart.data.datasets[0].data = createData(totalForceX);
  forceXChart.update();
}

function recalculateForceY() {
  forceYChart.data.datasets[0].data = createData(totalForceY);
  forceYChart.update();
}

function recalculateForceZ() {
  forceZChart.data.datasets[0].data = createData(totalForceZ);
  forceZChart.update();
}

function recalculateTorqueX() {
  torqueXChart.data.datasets[0].data = createData(totalTorqueX);
  torqueXChart.update();
}

function recalculateForceXWindwardTramp() {
  forceXWindwardChart.data.datasets[0].data = createData(forceXWindwardTramp);
  forceXWindwardChart.update();
}

function recalculateForceYWindwardTramp() {
  forceYWindwardChart.data.datasets[0].data = createData(forceYWindwardTramp);
  forceYWindwardChart.update();
}

function recalculateForceZWindwardTramp() {
  forceZWindwardChart.data.datasets[0].data = createData(forceZWindwardTramp);
  forceZWindwardChart.update();
}

function recalculateTorqueXWindwardTramp() {
  torqueXWindwardChart.data.datasets[0].data = createData(torqueXWindwardTramp);
  torqueXWindwardChart.update();
}

function recalculateForceXLeewardTramp() {
  forceXLeewardChart.data.datasets[0].data = createData(forceXLeewardTramp);
  forceXLeewardChart.update();
}

function recalculateForceYLeewardTramp() {
  forceYLeewardChart.data.datasets[0].data = createData(forceYLeewardTramp);
  forceYLeewardChart.update();
}

function recalculateForceZLeewardTramp() {
  forceZLeewardChart.data.datasets[0].data = createData(forceZLeewardTramp);
  forceZLeewardChart.update();
}

function recalculateTorqueXLeewardTramp() {
  torqueXLeewardChart.data.datasets[0].data = createData(torqueXLeewardTramp);
  torqueXLeewardChart.update();
}

