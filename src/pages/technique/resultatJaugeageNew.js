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
import { useState,useEffect} from "react";
import {useParams } from 'react-router-dom';
// @mui material components
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

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

// import MDAlert from "components/MDAlert";
import URL from "./statics";

function ResultatJaugeageNew() {
    const { id } = useParams();
    const [openAlertSuccess, setopenAlertSuccess] = useState(false);
    const [openAlertError, setopenAlertError] = useState(false);
    
    
    const [nomPrenom,setNomPrenom] = useState();
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
    
    const [demande,setDemande] = useState();
    const [etat,setetat] = useState();
    const [valeur,setvaleur] = useState();

    const  handleSave = () =>{
      const postData = {demande,etat,valeur}
      console.log(postData)
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
      fetch(URL.RESULTAT_DATA_ADD_URL, requestOptions,).then(res => {
        if(res.status===201){
          console.log(res.status)
          setopenAlertSuccess(true)
          window.location.replace(`/resultat-jaugeage/liste`);
        }else{
          console.log("Error")
          setopenAlertError(true)
        }
      })
    }
    const  handleRejet = () =>{
      const postData = {demande,etat,valeur}
      console.log(postData)
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
      fetch(URL.RESULTAT_DATA_REJET_URL, requestOptions,).then(res => {
        if(res.status===201){
          console.log(res.status)
          setopenAlertError(true)
          window.location.replace(`/resultat-jaugeage/liste`);
        }else{
          console.log("Error")
          setopenAlertError(true)
        }
      })
    }

    const fetchDemandeData = () => {
        const myHeaders = {
          "Authorization": `Token ${localStorage.getItem('token')}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };
        fetch(`${URL.DEMANDE_DATA_URL}?id=${id}`,requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setDemande(id)
          setNomPrenom(data.nom_prenom)
          setcnib(data.cnib)
          setdenomination(data.denomination)
          setsiege(data.siege)
          setadressepostal(data.adressepostal)
          settelephone(data.telephone)
          setemail(data.email)
          setrccm(data.rccm)
          setifu(data.ifu)
          setidchassisciterne(data.id_chassis_citerne)
          setlicenceciterne(data.licence_citerne)
          setconstructeurciterne(data.constructeur_citerne)
          setnbrcompatimentciterne(data.nbr_compatiment_citerne)
          setcapaciteciterne(data.capacite_citerne)
          setdatefabriqciterne(data.date_fabriq_citerne)
          setlicencetracteur(data.licence_tracteur)
          setidchassistracteur(data.id_chassis_tracteur)
          setmarquetracteur(data.marque_tracteur)
          
        })
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
                  Nouveau resultat de jaugeage
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
                        <MDTypography variant="h6" color="black">
                          Nom et Prénom 
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="nomprenom" value={nomPrenom} onChange={(event)=>setNomPrenom(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDTypography variant="h6" color="black">
                          Numéro du CNIB
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="cnib" value={cnib} onChange={(event)=>setcnib(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Dénomination intégrale de la société
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="denomination" value={denomination} onChange={(event)=>setdenomination(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Siége de la société
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="siege" value={siege} onChange={(event)=>setsiege(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Adresse postale
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="address" value={adressepostal} onChange={(event)=>setadressepostal(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Numéro de téléphone
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled id="tel" value={telephone} onChange={(event)=>settelephone(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        E-mail
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="email" value={email} onChange={(event)=>setemail(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        Numéro d&apos;immatriculation au RCCM
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="rccm" value={rccm} onChange={(event)=>setrccm(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        Numéro IFU
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="ifu" value={ifu} onChange={(event)=>setifu(event.target.value)} />
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
                       <MDTypography variant="h6" color="black">
                        Numéro chassis de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="idchassisciterne" disableidchassisciterne value={idchassisciterne} onChange={(event)=>setidchassisciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Numéro d&apos;immatriculation de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="licenceciterne" value={licenceciterne} onChange={(event)=>setlicenceciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Constructeur de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="constructeurciterne" value={constructeurciterne} onChange={(event)=>setconstructeurciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Nombre de compartiment de la citerne
                      </MDTypography>
                        <MDInput type="text"  fullWidth disabled id="nbrcompatimentciterne" value={nbrcompatimentciterne} onChange={(event)=>setnbrcompatimentciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Capacité de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="capaciteciterne" value={capaciteciterne} onChange={(event)=>setcapaciteciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Date fabrication de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="datefabriqciterne" value={datefabriqciterne} onChange={(event)=>setdatefabriqciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Numéro chassis du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="idchassistracteur" value={idchassistracteur} onChange={(event)=>setidchassistracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Numéro d&apos;immatriculation du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="licencetracteur" value={licencetracteur} onChange={(event)=>setlicencetracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Marque du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled id="marquetracteur" value={marquetracteur} onChange={(event)=>setmarquetracteur(event.target.value)} />
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
                Valeur du jaugeage
                </MDTypography><br />
                <Grid container spacing={2} xs={12}>
                    <Grid item >
                        <MDInput type="text" style={{display:'none'}} label="Demande" fullWidth  id="demande" value={demande} onChange={(event)=>setDemande(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Justification" fullWidth  id="etat" value={etat} onChange={(event)=>setetat(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDInput type="text" label="Valeur mesurée" fullWidth  id="valeur" value={valeur} onChange={(event)=>setvaleur(event.target.value)} />
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
                     <MDButton variant="gradient" color="success"  onClick={()=>handleSave()} >Enregistrer </MDButton>
                    </Grid>
                    <Grid item >
                     <MDButton variant="gradient" color="error"  onClick={()=>handleRejet()} >Rejeter </MDButton>
                    </Grid>
                </Grid>
                </MDBox>
           
          </Grid>
        </Grid>
      </MDBox>
      <MDBox sx={{ width: '100%' }}>
        <Collapse in={openAlertSuccess}>
          <MDAlert color="success" dismissible>Enregistrement réussi!</MDAlert>
        </Collapse>
      </MDBox>
      <MDBox sx={{ width: '100%' }}>
        <Collapse in={openAlertError}>
          <MDAlert color="error" dismissible>Enregistrement echoué!</MDAlert>
        </Collapse>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ResultatJaugeageNew;