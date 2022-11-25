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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import chartData from "layouts/dashboard/data/chartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

function Dashboard() {
  const {
    lastUpdated,
    activePower,
    reactivePower,
    apparentPower,
    yphase,
    rphase,
    bphase,
    ir,
    iy,
    ib,
    iAvg,
    pF,
  } = chartData;
  return (
    <DashboardLayout>
      {/* {console.log("42 dashboard")} */}
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="VR"
                color="error"
                title="R P Voltage"
                count={rphase.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="VY"
                title="Y P Voltage"
                color="warning"
                count={yphase.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="VB"
                color="info"
                title="B P Voltage"
                count={bphase.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="AP"
                color="error"
                title="Active P/w"
                count={activePower.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="RP"
                color="warning"
                title="Reactive P/w"
                count={reactivePower.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="APP"
                color="info"
                title="Apparent P/w"
                count={apparentPower.cumulativeData}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="IR"
                color="warning"
                title="IR"
                count={ir.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="IY" color="info" title="IY" count={iy.cumulativeData} />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={4}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard icon="IB" color="error" title="IB" count={ib.cumulativeData} />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={6}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="AVG"
                color="info"
                title="IAvg"
                count={iAvg.cumulativeData}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={2} lg={6}>
            <MDBox>
              <ComplexStatisticsCard icon="PF" color="error" title="PF" count={pF.cumulativeData} />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="error"
                  title="VR(R Phase Voltage)"
                  date={`Last Updated ${lastUpdated}`}
                  chart={rphase}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  title="VY(Y Phase Voltage)"
                  color="warning"
                  date={`Last Updated ${lastUpdated}`}
                  chart={yphase}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="VB(B Phase Voltage)"
                  date={`Last Updated ${lastUpdated}`}
                  chart={bphase}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="error"
                  title="Active Power"
                  date={`Last Updated ${lastUpdated}`}
                  chart={activePower}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="warning"
                  title="Reactive Power"
                  date={`Last Updated ${lastUpdated}`}
                  chart={reactivePower}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Apparent Power"
                  date={`Last Updated ${lastUpdated}`}
                  chart={apparentPower}
                />
              </MDBox>
            </Grid>
            {/**/}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="IY"
                  date={`Last Updated ${lastUpdated}`}
                  chart={iy}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="IR"
                  date={`Last Updated ${lastUpdated}`}
                  chart={ir}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="IB"
                  date={`Last Updated ${lastUpdated}`}
                  chart={ib}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Iavg"
                  date={`Last Updated ${lastUpdated}`}
                  chart={iAvg}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="pF"
                  date={`Last Updated ${lastUpdated}`}
                  chart={pF}
                />
              </MDBox>
            </Grid>
            {/**/}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Projects />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
