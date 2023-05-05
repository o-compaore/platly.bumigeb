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
import {useParams } from 'react-router-dom';
// @mui material components
import Grid from "@mui/material/Grid";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Form UI
import MDInput from 'components/MDInput'
import MDButton from "components/MDButton";

// Printing module
import { useReactToPrint } from 'react-to-print';
import URL from "statics";

function DemandeInfo() {
    const componentRef = useRef();
    const { id } = useParams();
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
    
    const [isDisabled, setDisabled] = useState(true);
    const buttonRef = useRef(null);

    const fetchDemandeData = () => {
      const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
      fetch(`${URL.DEMANDE_DATA_URL}?id=${id}`,requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
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

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    useEffect(() => {
        fetchDemandeData()
    }, [])
    
    const  handleDelete = () =>{
      console.log('Deleting')
    }
    
    const  handleSave = () =>{
      console.log('saving')
    }

    const  handleEdit = () =>{
      setDisabled(false)
      buttonRef.current.addEventListener(
        "click",
        handleSave,
        false
      ); 
    }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3} >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} ref={componentRef}>
            
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
                  Détail sur la demande de jaugeage
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
                        <MDInput type="text" fullWidth disabled={isDisabled} id="nomprenom" value={nomPrenom} onChange={(event)=>setNomPrenom(event.target.value)} />
                    </Grid>
                    <Grid item >
                        <MDTypography variant="h6" color="black">
                          Numéro du CNIB
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="cnib" value={cnib} onChange={(event)=>setcnib(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Dénomination intégrale de la société
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="denomination" value={denomination} onChange={(event)=>setdenomination(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Siége de la société
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="siege" value={siege} onChange={(event)=>setsiege(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Adresse postale
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="address" value={adressepostal} onChange={(event)=>setadressepostal(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                          Numéro de téléphone
                        </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="tel" value={telephone} onChange={(event)=>settelephone(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        E-mail
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="email" value={email} onChange={(event)=>setemail(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        Numéro d&apos;immatriculation au RCCM
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="rccm" value={rccm} onChange={(event)=>setrccm(event.target.value)} />
                    </Grid>
                    <Grid item >
                      <MDTypography variant="h6" color="black">
                        Numéro IFU
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="ifu" value={ifu} onChange={(event)=>setifu(event.target.value)} />
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
                        <MDInput type="text" fullWidth disabled={isDisabled} id="idchassisciterne" disableidchassisciterne value={idchassisciterne} onChange={(event)=>setidchassisciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Numéro d&apos;immatriculation de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="licenceciterne" value={licenceciterne} onChange={(event)=>setlicenceciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Constructeur de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="constructeurciterne" value={constructeurciterne} onChange={(event)=>setconstructeurciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                        Nombre de compartiment de la citerne
                      </MDTypography>
                        <MDInput type="text"  fullWidth disabled={isDisabled} id="nbrcompatimentciterne" value={nbrcompatimentciterne} onChange={(event)=>setnbrcompatimentciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Capacité de la citerne
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="capaciteciterne" value={capaciteciterne} onChange={(event)=>setcapaciteciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Date fabrication de la citerne
                      </MDTypography>
                        <MDInput type="date" fullWidth disabled={isDisabled} id="datefabriqciterne" value={datefabriqciterne} onChange={(event)=>setdatefabriqciterne(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Numéro chassis du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="idchassistracteur" value={idchassistracteur} onChange={(event)=>setidchassistracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Numéro d&apos;immatriculation du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="licencetracteur" value={licencetracteur} onChange={(event)=>setlicencetracteur(event.target.value)} />
                    </Grid>
                    <Grid item >
                       <MDTypography variant="h6" color="black">
                       Marque du tracteur
                      </MDTypography>
                        <MDInput type="text" fullWidth disabled={isDisabled} id="marquetracteur" value={marquetracteur} onChange={(event)=>setmarquetracteur(event.target.value)} />
                    </Grid>
                </Grid>
              </MDBox>
          </Grid>
          <Grid item xs={12}>
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
              <Grid container spacing={{ xs: 3, sm: 4, md: 3 }}>
                  <Grid item >
                    <MDButton variant="gradient" color="success" ref={buttonRef} onClick={()=>handleEdit()} >Modifier </MDButton>
                  </Grid>
                  <Grid item xs>
                    <MDButton variant="gradient" color="info"  onClick={()=>handlePrint()} >Imprimer </MDButton>
                  </Grid>
                  <Grid item>
                    <MDButton variant="gradient" color="error"  onClick={()=>handleDelete()} >Supprimer </MDButton>
                  </Grid>
              </Grid>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DemandeInfo;