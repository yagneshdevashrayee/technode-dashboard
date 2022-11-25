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
const tableData = sessionStorage.getItem("data");
let totalActivePower = 0;
let totalApparentPower = 0;
let totalReactivePower = 0;
let totalVb = 0;
let totalVy = 0;
let totalVr = 0;
let totalIb = 0;
let totalIy = 0;
let totalIr = 0;
let totalIAvg = 0;
let totalpF = 0;
let lastUpdated = new Date();
const today = new Date().setHours(0, 0, 0, 0);
if (tableData) {
  JSON.parse(tableData).forEach((eachRow, index) => {
    if (index === 0) {
      lastUpdated = eachRow.ts;
    }
    if (index === 0) {
      totalActivePower = parseFloat(eachRow["Active Power"], 10);
      totalApparentPower = parseFloat(eachRow["Apparent Power"], 10);
      totalReactivePower = parseFloat(eachRow["Reactive Power"], 10);
      totalVb = parseFloat(eachRow.VB, 10);
      totalVy = parseFloat(eachRow.VY, 10);
      totalVr = parseFloat(eachRow.VR, 10);
      totalIb = parseFloat(eachRow.IB, 10);
      totalIy = parseFloat(eachRow.IY, 10);
      totalIr = parseFloat(eachRow.IR, 10);
      totalIAvg = parseFloat(eachRow.Iavg, 10);
      totalpF = parseFloat(eachRow.PF, 10);
    }
  });
}

const graphTime =
  tableData &&
  JSON.parse(tableData)
    .map((eachRow, index) => {
      const reqDateVar = new Date(eachRow.timeStamp).setHours(0, 0, 0, 0);
      if (index < 20) {
        if (today === reqDateVar) {
          return `${new Date(eachRow.timeStamp).getHours()}:${new Date(
            eachRow.timeStamp
          ).getMinutes()}`;
        }
        return `${new Date(eachRow.timeStamp).getDate()}/${
          new Date(eachRow.timeStamp).getMonth() + 1
        }`;
      }
      return null;
    })
    .filter((data) => data != null);
const activePower =
  tableData &&
  JSON.parse(tableData).map((eachObject) => parseFloat(eachObject["Active Power"], 10));
const apparentPower =
  tableData &&
  JSON.parse(tableData).map((eachObject) => parseFloat(eachObject["Apparent Power"], 10));
const ReactivePower =
  tableData &&
  JSON.parse(tableData).map((eachObject) => parseFloat(eachObject["Reactive Power"], 10));
const vB = tableData && JSON.parse(tableData).map((eachObject) => parseFloat(eachObject.VB, 10));
const vY = tableData && JSON.parse(tableData).map((eachObject) => parseFloat(eachObject.VY, 10));
const vR = tableData && JSON.parse(tableData).map((eachObject) => parseFloat(eachObject.VR, 10));
const iB = tableData && JSON.parse(tableData).map((eachObject) => eachObject.IB);
const iY = tableData && JSON.parse(tableData).map((eachObject) => eachObject.IY);
const iR = tableData && JSON.parse(tableData).map((eachObject) => eachObject.IR);
const iAvg = tableData && JSON.parse(tableData).map((eachObject) => eachObject.iAvg);
const pF = tableData && JSON.parse(tableData).map((eachObject) => eachObject.PF);
export default {
  lastUpdated,
  activePower: {
    labels: graphTime,
    // labels: ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "10m"],
    datasets: { label: "Power", data: activePower },
    cumulativeData: totalActivePower,
  },
  reactivePower: {
    labels: graphTime,
    datasets: { label: "Power", data: ReactivePower },
    cumulativeData: totalReactivePower,
  },
  apparentPower: {
    labels: graphTime,
    datasets: { label: "Power", data: apparentPower },
    cumulativeData: totalApparentPower,
  },
  yphase: {
    labels: graphTime,
    datasets: { label: "Voltage", data: vY },
    cumulativeData: totalVy,
  },
  rphase: {
    labels: graphTime,
    datasets: { label: "Voltage", data: vR },
    cumulativeData: totalVr,
  },
  bphase: {
    labels: graphTime,
    datasets: { label: "Voltage", data: vB },
    cumulativeData: totalVb,
  },
  iy: {
    labels: graphTime,
    datasets: { label: "Voltage", data: iY },
    cumulativeData: totalIy,
  },
  ir: {
    labels: graphTime,
    datasets: { label: "Voltage", data: iR },
    cumulativeData: totalIr,
  },
  ib: {
    labels: graphTime,
    datasets: { label: "Voltage", data: iB },
    cumulativeData: totalIb,
  },
  iAvg: {
    labels: graphTime,
    datasets: { label: "Voltage", data: iAvg },
    cumulativeData: totalIAvg,
  },
  pF: {
    labels: graphTime,
    datasets: { label: "Voltage", data: pF },
    cumulativeData: totalpF,
  },
};
