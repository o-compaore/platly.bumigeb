/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState, useEffect} from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
// import OrdersOverview from "layouts/dashboard/components/OrdersOverview";


function Dashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [demandesNbr,setdemandesNbr] = useState()
  const [jaugeageReussiNbr,setjaugeageReussiNbr] = useState()
  const [jaugeageEchouerNbr,setjaugeageEchouerNbr] = useState()
  const [vehiculesNbr,setvehiculeNbr] = useState()

  useEffect(() => {
    setdemandesNbr(10)
    setjaugeageReussiNbr(10)
    setjaugeageEchouerNbr(10)
    setvehiculeNbr(10)
  },
  [])

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Demande enregistrée"
                count={demandesNbr}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "par rapport à la semaine passée"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Jaugeage reussi"
                count={jaugeageReussiNbr}
                percentage={{
                  color: "error",
                  amount: "-3%",
                  label: "par rapport à la semaine passée"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Jaugeage echoué"
                count={jaugeageEchouerNbr}
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "par rapport à la semaine passée"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Vehicule enregistré"
                count={vehiculesNbr}
                percentage={{
                  color: "success",
                  amount: "+11%",
                  label: "par rapport à la semaine passée"
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="info"
                  title="Evolution des entrées et sorties"
                  description="Representation de l'evolution des entrées et sorties de camions enregistré par les caméras"
                  date="par rapport à la semaine passée"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Evolution des vehicules jaugés"
                  description="Courbes d'evolution des véhicules qui sont passés au platforme de jaugeage"
                  date="par rapport à la semaine passée"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Evolution des demandes de jaugeage"
                  description="Courbe de l'evoltion des demandes de jaugeage enregistrée de la semaine en cours"
                  date="par rapport à la semaine passée"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
   
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
