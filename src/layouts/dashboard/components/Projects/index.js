/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import Grid from "@mui/material/Grid";
import MDTypography from "components/MDTypography";

// Soft UI Dashboard Materail-UI example components
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  function downloadBlob(content, filename, contentType) {
    const csvString = [
      [
        ["\n"],
        "Active Power",
        "Apparent Power",
        "Demand",
        "Energy",
        "PF",
        "Reactive Power",
        "VB",
        "VR",
        "VY",
        "IB",
        "IR",
        "IY",
        "TimeStamp",
      ],
      JSON.parse(content).map((item) => [
        ["\n"],
        item["Active Power"],
        item["Apparent Power"],
        item.Demand,
        item.Energy,
        item.PF,
        item["Reactive Power"],
        item.VB,
        item.VR,
        item.VY,
        item.IB,
        item.IR,
        item.IY,
        item.ts,
      ]),
    ];

    // Create a blob
    const blob = new Blob([csvString], { type: contentType });
    const url = URL.createObjectURL(blob);

    // Create a link to download it
    const pom = document.createElement("a");
    pom.href = url;
    pom.setAttribute("download", filename);
    pom.click();
  }
  function onDownloadClick() {
    downloadBlob(sessionStorage.getItem("data"), `${new Date()}.csv`, "text/csv;charset=utf-8;");
  }
  const renderMenu = (
    <Grid item xs={4} sm={2} lg={2}>
      <MDButton variant="gradient" color="info" onClick={() => onDownloadClick()} fullWidth>
        Export CSV
      </MDButton>
    </Grid>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            All Details
          </MDTypography>
        </MDBox>

        {renderMenu}
      </MDBox>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
