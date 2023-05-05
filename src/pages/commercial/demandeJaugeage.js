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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDInput from 'components/MDInput'
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import URL from "statics";
// Data
import buildDemandeData from "pages/commercial/data";


function DemandeList() {
    const [societe,setSociete] = useState('');
    const [nom,setNom] = useState('');
    const [tel,setTel] = useState('');
    const [date,setDate] = useState('');

    const [columns,setColumnsData] = useState([]);
    const [rows,setRowsData] = useState([]);

    const fetchDemandeData = () => {
    const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
      fetch(`${URL.DEMANDE_DATA_URL}?societe=${societe}&nom=${nom}&tel=${tel}&date=${date}`,requestOptions)
      .then(response => response.json())
      .then(data => {
        const res = buildDemandeData(data)
        setColumnsData(res.columns)
        setRowsData(res.rows)
      })
    }
    const handleSearch = () => {
        fetchDemandeData(date,societe)
    }
    useEffect(() => {
        fetchDemandeData()
    }, [])
    
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                 <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item  xs>
                    <MDTypography variant="h6" color="white">
                      Demande de jaugeage
                    </MDTypography>
                  </Grid>
                  <Grid item >
                    <MDButton component="a" color="info" href='/demande-jaugeage/add' size="medium">Créer une nouvelle demande</MDButton>
                  </Grid>
                 </Grid>
              </MDBox>
              <MDBox mx={3} mt={5}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item  >
                    <MDInput type="text" label="Nom" value={nom} onChange={(event)=>setNom(event.target.value)} />
                  </Grid>
                  <Grid item  >
                    <MDInput type="text" label="Sociéte" value={societe} onChange={(event)=>setSociete(event.target.value)} />
                  </Grid>
                  <Grid item  >
                    <MDInput type="text" label="Téléphone" value={tel} onChange={(event)=>setTel(event.target.value)} />
                  </Grid>
                  <Grid item  >
                   <MDInput type="date" value={date} onChange={(event)=>setDate(event.target.value)} />
                  </Grid>
                  <Grid item  >
                    <MDButton variant="gradient" color="info" iconOnly onClick={()=>handleSearch()}>
                        <Icon>search</Icon>
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
              
              <MDBox pt={3}>
                <DataTable table={{columns,rows}} noEndBorder />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DemandeList;