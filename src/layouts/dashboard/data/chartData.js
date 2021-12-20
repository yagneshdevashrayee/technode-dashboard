/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
const tableData = localStorage.getItem("data");
let totalActivePower = 0;
let totalApparentPower = 0;
let totalReacivePower = 0;
let totalVb = 0;
let totalVy = 0;
let totalVr = 0;
let lastUpdated = "Recently";
if (tableData) {
  JSON.parse(tableData).forEach((eachRow, index) => {
    if (index === 1) {
      lastUpdated = eachRow.timestamp;
    }
    if (index < 5) {
      totalActivePower += parseInt(eachRow["Active Power"], 10);
      totalApparentPower += parseInt(eachRow["Apparent Power"], 10);
      totalReacivePower += parseInt(eachRow["Reacive Power"], 10);
      totalVb += parseInt(eachRow.VB, 10);
      totalVy += parseInt(eachRow.VY, 10);
      totalVr += parseInt(eachRow.VR, 10);
    }
  });
}

console.log("1", totalActivePower / 4);
console.log("2", totalApparentPower / 4);
console.log("3", totalReacivePower / 4);
console.log("4", totalVb / 4);
console.log("5", totalVy / 4);
console.log("6", totalVr / 4);
console.log("time ", lastUpdated);
console.log("tableData", tableData);
const activePower =
  tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject["Active Power"], 10));
console.log("demo", activePower);
const apparentPower =
  tableData &&
  JSON.parse(tableData).map((eachObject) => parseInt(eachObject["Apparent Power"], 10));
console.log("apparentPower", apparentPower);
const reacivePower =
  tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject["Reacive Power"], 10));
console.log("reacivePower", reacivePower);
const vB = tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject.VB, 10));
console.log("reacivePower", vB);
const vY = tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject.VY, 10));
console.log("reacivePower", vY);
const vR = tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject.VR, 10));
console.log("reacivePower", vR);

export default {
  lastUpdated,
  power: {
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Power", data: activePower },
    cumulativeData: totalActivePower / 4,
    // datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
  },
  sales: {
    // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Power", data: reacivePower },
    cumulativeData: totalReacivePower / 4,
    // datasets: { label: "Mobile apps", data: [50, 40, 300, 320, 500, 350, 200, 230, 500] },
  },
  tasks: {
    // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // datasets: { label: "Power", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Power", data: apparentPower },
    cumulativeData: totalApparentPower / 4,
  },
  yphase: {
    // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // datasets: { label: "Power", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Voltage", data: vY },
    cumulativeData: totalVy / 4,
  },
  rphase: {
    // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // datasets: { label: "Power", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Voltage", data: vR },
    cumulativeData: totalVr / 4,
  },
  bphase: {
    // labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // datasets: { label: "Power", data: [50, 40, 300, 220, 500, 250, 400, 230, 500] },
    labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Voltage", data: vB },
    cumulativeData: totalVb / 4,
  },
};
