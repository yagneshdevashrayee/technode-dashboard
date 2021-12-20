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
console.log("tableData", tableData);
const activePower =
  tableData && JSON.parse(tableData).map((eachObject) => parseInt(eachObject["Active Power"], 10));
console.log("demo", activePower);
export default {
  labels: ["1m", "2m", "3m", "4m"],
  datasets: { label: "Power", data: activePower },
  // datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, 40] },
};
