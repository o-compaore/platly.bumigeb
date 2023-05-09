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
import { useState, useRef} from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { useReactToPrint } from 'react-to-print';
// Material Dashboard 2 React components
import MDBox from "./components/MDBox";
import MDTypography from "./components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "./examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "./examples/Navbars/DashboardNavbar";
import Footer from "./examples/Footer";

// Form UI
import MDInput from './components/MDInput'
import MDButton from "./components/MDButton";
import MDAlert from "./components/MDAlert";
import Collapse from '@mui/material/Collapse';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from "@mui/material/Divider";
import MDAvatar from "./components/MDAvatar";

import URL from "./statics";


function DemandeNew() {
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
    const [openAlert, setOpenAlert] = useState(false);
    const [openAlertError, setOpenAlertError] = useState(false);
    const [nomPrenom,setNomPrenom] = useState();
    const [uuid,setUUId] = useState();
    const [cnib,setcnib] = useState();
    const [denomination,setdenomination] = useState();
    const [siege,setsiege] = useState();
    const [adressepostal,setadressepostal] = useState();
    const [telephone,settelephone] = useState();
    const [email,setemail] = useState();
    const [rccm,setrccm] = useState();
    const [ifu,setifu] = useState();
    const [idchassisciterne,setidchassisciterne] = useState();
    const [licenceciterne,setlicenceciterne] = useState();
    const [constructeurciterne,setconstructeurciterne] = useState();
    const [nbrcompatimentciterne,setnbrcompatimentciterne] = useState();
    const [capaciteciterne,setcapaciteciterne] = useState();
    const [datefabriqciterne,setdatefabriqciterne] = useState();
    const [licencetracteur,setlicencetracteur] = useState();
    const [idchassistracteur,setidchassistracteur] = useState();
    const [marquetracteur,setmarquetracteur] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
/*
    const cleanForm = () =>{
      setNomPrenom('')
      setcnib('')
      setdenomination('')
      setsiege('')
      setadressepostal('')
      settelephone('')
      setemail('')
      setrccm('')
      setifu('')
      setidchassisciterne('')
      setlicenceciterne('')
      setconstructeurciterne('')
      setnbrcompatimentciterne('')
      setcapaciteciterne('')
      setdatefabriqciterne('')
      setlicencetracteur('')
      setidchassistracteur('')
      setmarquetracteur('')
    }
  */  const handlePrint = useReactToPrint({
    content: () => modalRef.current,
  });

    const  handleSave = () =>{
      const postData = {nomPrenom,cnib,denomination,siege,adressepostal,telephone,email,rccm,ifu,idchassisciterne,licenceciterne,constructeurciterne,nbrcompatimentciterne,capaciteciterne,datefabriqciterne,licencetracteur,idchassistracteur,marquetracteur}
      const myHeaders = {
        "Authorization": `Token ${localStorage.getItem('token')}`,
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(postData)
      };
      fetch(URL.DEMANDE_DATA_ADD_URL, requestOptions).then(response => {
        if(response.status===201){
          return response.json()
        }
      return null})
      .then(res => {
        console.log(res)
        if(res !== null){
          setUUId(res.uuid)
          // cleanForm()
          setOpenAlert(true)
          handleOpen()
        }else{
          console.log("Error")
          setOpenAlertError(true)
        }
      })
      }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
                <MDTypography variant="h6" color="white">
                  Nouvelle demande de jaugeage
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={3}
                mb={3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="white"
                borderRadius="sm"
                coloredShadow="info"
               > <MDTypography variant="h6">
                   Information relatives au client
                </MDTypography><br />
                 <Grid container spacing={{ xs: 3, sm: 4, md: 3 }}>
                    <Grid item >
                        <MDInput type="text" label="Nom et Prénom" fullWidth  id="nomprenom" value={nomPrenom} onChange={(event)=>setNomPrenom(event.target.value)} />
                    </Grid>
                    <Grid item  >
                        <MDInput type="text" label="Numéro du CNIB" fullWidth  id="cnib" value={cnib} onChange={(event)=>setcnib(event.target.value)} />
                    </Grid>
                    <Grid item  >
                        <MDInput type="text" label="Dénomination intégrale de la société" fullWidth  id="denomination" value={denomination} onChange={(event)=>setdenomination(event.target.value)} />
                    </Grid>
                    <Grid item  >
                        <MDInput type="text" label="Siége de la société" fullWidth  id="siege" value={siege} onChange={(event)=>setsiege(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Adresse postale" fullWidth  id="address" value={adressepostal} onChange={(event)=>setadressepostal(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro de téléphone" fullWidth  id="tel" value={telephone} onChange={(event)=>settelephone(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="E-mail" fullWidth  id="email" value={email} onChange={(event)=>setemail(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro d&apos;immatriculation au RCCM" fullWidth  id="rccm" value={rccm} onChange={(event)=>setrccm(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro IFU" fullWidth  id="ifu" value={ifu} onChange={(event)=>setifu(event.target.value)} />
                    </Grid>
                </Grid>
              </MDBox>
              <MDBox
                mx={2}
                mt={3}
                mb={3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="white"
                borderRadius="sm"
                coloredShadow="info"
             >
                <MDTypography variant="h6">
                Information relatives au citerne
                </MDTypography><br />
                <Grid container spacing={{ xs: 3, sm: 4, md: 3 }}>
                    <Grid item >
                        <MDInput type="text" label="Numéro chassis de la citerne" fullWidth  id="idchassisciterne" disableidchassisciterne value={idchassisciterne} onChange={(event)=>setidchassisciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro d&apos;immatriculation de la citerne" fullWidth  id="licenceciterne" value={licenceciterne} onChange={(event)=>setlicenceciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Constructeur de la citerne" fullWidth  id="constructeurciterne" value={constructeurciterne} onChange={(event)=>setconstructeurciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Nombre de compartiment de la citerne " fullWidth  id="nbrcompatimentciterne" value={nbrcompatimentciterne} onChange={(event)=>setnbrcompatimentciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Capacité de la citerne" fullWidth  id="capaciteciterne" value={capaciteciterne} onChange={(event)=>setcapaciteciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="date" label="Date fabrication de la citerne" fullWidth  id="datefabriqciterne" value={datefabriqciterne} onChange={(event)=>setdatefabriqciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro chassis du tracteur" fullWidth  id="idchassistracteur" value={idchassistracteur} onChange={(event)=>setidchassistracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Numéro d&apos;immatriculation du tracteur" fullWidth  id="licencetracteur" value={licencetracteur} onChange={(event)=>setlicencetracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Marque du tracteur" fullWidth  id="marquetracteur" value={marquetracteur} onChange={(event)=>setmarquetracteur(event.target.value)} />
                    </Grid>
                </Grid>
              </MDBox>
              <MDBox
                mx={2}
                mt={3}
                mb={3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="white"
                borderRadius="sm"
                coloredShadow="info"
             >
                <Grid container spacing={2} xs={12}>

                    <Grid item >
                     <MDButton variant="gradient" color="info"  onClick={()=>handleSave()} >Enregistrer </MDButton>
                    </Grid>
                 
                </Grid>
                </MDBox>
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
              <MDBox pt={6} pb={3} m={2} ref={modalRef}>
                <Grid container spacing={6}>
                  <Grid item xs>
                    <MDTypography variant="h6">Bureau des Mines et de la Géologie du Burkina (BUMIGEB) </MDTypography>
                    <MDTypography variant="h6">-------------------------- </MDTypography>
                    <MDTypography variant="body">Sécurité industrielle et minière</MDTypography>
                  </Grid>
                  <Grid item>
                    <MDTypography variant="h4">Burkina Faso</MDTypography><br />
                    <MDTypography variant="h6">Unité - Progrès - Justice</MDTypography><br />
                  </Grid>
                </Grid> <Divider light={false} />
                <Grid container spacing={{pt:2,m:4}}>
                  <Grid item xs={2} />
                  <Grid item >
                    <MDTypography variant="h4">Quittance de paiement pour le service de jaugeage</MDTypography>
                  </Grid>
                </Grid>
                <Divider light={false} />
                <Grid container spacing={{mt:5}}>
                  <Grid item xs={10} >
                  <MDTypography variant="body">
                    Société: <strong>{denomination}</strong> <br />
                    Nom et prénom: <strong>{nomPrenom}</strong><br />
                    Téléphone: <strong>{telephone} </strong><br />
                    E-mail: <strong>{email}</strong>
                  </MDTypography>
                  </Grid>
                  <Grid item xs={2} >
                    <MDBox display="flex" alignItems="center" lineHeight={1}>
                      <MDAvatar id={uuid} src={`${URL.QRCODE_IMAGE_URL}?photo=${uuid}.png`} size="xl" variant="square" />
                    </MDBox>
                  </Grid>
                </Grid>
                <Divider light={false} />
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <MDTypography variant="body"><strong>Dénomination</strong></MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography variant="body"><strong>Quantité</strong></MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography variant="body"><strong>Prix unitaire</strong></MDTypography>
                  </Grid>
                  <Grid item >
                    <MDTypography variant="body"><strong>Total</strong></MDTypography>
                  </Grid>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6}>
                    <MDTypography variant="body">Citerne {idchassisciterne} marque {constructeurciterne} fabriqué le {datefabriqciterne}</MDTypography><br />
                    <MDTypography variant="body">Tracteur {idchassistracteur} marque {marquetracteur}</MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography variant="body">1</MDTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MDTypography variant="body">204 000FCFA</MDTypography>
                  </Grid>
                  <Grid item >
                    <MDTypography variant="body">204 000FCFA</MDTypography>
                  </Grid>
                </Grid><br /><br />
                <Grid container spacing={6}>
                <Grid item xs />
                  <Grid item >
                    <MDBox display="flex" alignItems="center" lineHeight={1}>
                      <MDTypography variant="h6">
                        Service commercial
                      </MDTypography>
                    </MDBox>
                  </Grid>
                </Grid><br /><br />
              </MDBox>
              <MDBox>
              <Divider light={false} />
              <Grid container >
              <Grid item xs/>
                <Grid item>
                  <MDButton color="info" onClick={()=>handlePrint()}>Imprimer</MDButton>
                </Grid>
              </Grid>
             </MDBox>
            </Card>
           
          </Modal>
        </div>
      </MDBox>

      <MDBox sx={{ width: '100%' }}>
        <Collapse in={openAlert}>
          <MDAlert color="success" dismissible>Enregistrement réussi!</MDAlert>
        </Collapse>
      </MDBox>
      <MDBox sx={{ width: '100%' }}>
        <Collapse in={openAlertError}>
          <MDAlert color="error" dismissible>Veuillez renseigner tout les champs!</MDAlert>
        </Collapse>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DemandeNew;