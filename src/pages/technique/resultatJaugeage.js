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
import { useState, useEffect, useRef } from "react";

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
import Modal from '@mui/material/Modal';
import { useReactToPrint } from 'react-to-print';

// Data
import buildResultatData from "pages/technique/data";
import URL from "statics";
// Scanner module
import {Html5Qrcode} from "html5-qrcode";


function ResultatJaugeageList() {
    const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height:900,
    boxShadow: 24,
    p: 4,
    };
    const modalRef = useRef();

    const [societe,setSociete] = useState();
    const [etat,setEtat] = useState();
    const [date,setDate] = useState();

    const [columns,setColumnsData] = useState([]);
    const [rows,setRowsData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = (resID) => {
      setOpen(true);
      console.log(resID)
    }

    const fetchDemandeData = () => {
      const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch(`${URL.RESULTAT_DATA_URL}?societe=${societe}&date=${date}&etat=${etat}`,requestOptions)
      .then(response => response.json())
      .then(data => {
        const res = buildResultatData(data,handleOpen)
        console.log(data)
        setColumnsData(res.columns)
        setRowsData(res.rows)
      })
    }
    const handleSearch = () => {
        fetchDemandeData(date,societe)
    }

    const handleStartQRCodeReader = () => {
      const html5QrCode = new Html5Qrcode("reader");
      const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          console.log(decodedText, decodedResult)
          const url = `${URL.QRCODE_DATA_URL}?uuid=${decodedText}`
          const myHeaders = {
            "Authorization": `Token ${localStorage.getItem('token')}`,
          }
          const requestOptions = {
            method: 'GET',
            headers: myHeaders,
          };
          fetch(url,requestOptions).then((response) => response.json())
          .then((data) => {
              console.log(data)
              if("msg" in data){
                  alert(`Ce véhicule est déjà programmé pour la ${data.date_passage}`)
              }else{
                console.log(`Ok`)
                window.location.replace(`/resultat-jaugeage/add/${data.id}`);
              }
          })
          html5QrCode.stop().then((ignore) => {
              console.log(ignore)
            }).catch((err) => {
              console.log(err)
            });
          
      };
      const config = { fps: 10, qrbox: { width: 400, height: 400 } };
      document.getElementById('table').style.display = "none"
      html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    }

    useEffect(() => {
        fetchDemandeData()
    }, [])

    const handlePrint = useReactToPrint({
      content: () => modalRef.current,
    });
  
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div id="table">
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
                      Resultat des jaugeages
                    </MDTypography>
                  </Grid>
                  <Grid item >
                    <MDButton variant="gradient" color="info" onClick={()=>handleStartQRCodeReader()}>Editer un nouveau resultat</MDButton>
                  </Grid>
                 </Grid>
              </MDBox>
              <MDBox mx={3} mt={5}>
               <Grid container columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
                 <Grid item  >
                  <MDInput type="search" fullWidth label="Sociéte" value={societe} onChange={(event)=>setSociete(event.target.value)} />
                 </Grid> 
                 <Grid item  >
                  <MDInput type="search" fullWidth label="Etat" value={etat} onChange={(event)=>setEtat(event.target.value)} />
                 </Grid> 
                 <Grid item  >
                  <MDInput type="date" fullWidth value={date} onChange={(event)=>setDate(event.target.value)} />
                 </Grid>
                 <Grid item  >
                  <MDButton variant="gradient" color="info" iconOnly onClick={()=>handleSearch()}>
                      <Icon>search</Icon>
                  </MDButton>
                 </Grid>
                </Grid> 
              </MDBox>
              
              <MDBox pt={3} >
                <DataTable table={{columns,rows}} noEndBorder />
                
              </MDBox>
             
            </Card>
          </Grid>
        </Grid>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card sx={style} >
              <MDBox pt={6} pb={3} ref={modalRef}>
                <Grid container spacing={6}>
                  <Grid item xs>
                    <MDTypography>BUMIGEB</MDTypography>
                  </Grid>
                  <Grid item>
                    <MDTypography>Burkina Faso</MDTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item >
                    <MDTypography>Quittance de paiement pour le service de jaugeage</MDTypography>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox>
              <Grid container >
                <Grid item>
                  <MDButton color="info" onClick={()=>handlePrint()}>Imprimer</MDButton>
                </Grid>
              </Grid>
             </MDBox>
            </Card>
           
          </Modal>
        </div>
      </MDBox>
      </div>
      <div id="reader" width="600px" zindex={1}/>
      <Footer />
    </DashboardLayout>
  );
}

export default ResultatJaugeageList;