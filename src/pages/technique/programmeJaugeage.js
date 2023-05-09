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
import { useEffect} from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Calendar module
import { Calendar } from 'fullcalendar'
import URL from "statics";
// Scanner module
import {Html5Qrcode} from "html5-qrcode";

function ProgrammeJaugeage() {
    
    const handleDateClick = (info,calendar) => {
        const html5QrCode = new Html5Qrcode("reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            console.log(decodedText, decodedResult)
            const url = `${URL.PROGRAMME_VISITE_DATA_ADD_URL}?uuid=${decodedText}&date_passage=${info.dateStr}`
            const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
            const requestOptions = {
              method: 'POST',
              headers: myHeaders,
            };
            fetch(url,requestOptions).then((response) => response.json())
            .then((data) => {
                console.log(data)
                if("msg" in data){
                    alert(`Ce véhicule est déjà programmé pour la ${data.date_passage}`)
                }else{
                    calendar.addEventSource( [{title  : data.denomination,start  : info.dateStr},])
                }
            })
            html5QrCode.stop().then((ignore) => {
                console.log(ignore)
                console.log("QR Code scanning is stopped.")
                document.getElementById('calendar').style.display = "block"
                document.getElementById('reader').style.display = "none"
              }).catch((err) => {
                console.log(err)
              });
            
        };
        const config = { fps: 10, qrbox: { width: 400, height: 400 } };
        document.getElementById("calendar").style.display = "none"
        document.getElementById('reader').style.display = "block"
        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    }
  
    useEffect(() => {
        const calendarEl = document.getElementById('calendar')
        const calendar = new Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: URL.PROGRAMME_VISITE_DATA_URL,
        })
        calendar.on('dateClick', (info) => {
           handleDateClick(info,calendar)
          });
        calendar.render()
    })
    
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
                  Programme des jaugeages
                </MDTypography>
             
              </MDBox>
              <MDBox
                mx={2}
                mt={3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="white"
                borderRadius="sm"
                coloredShadow="info"
              >
                <div id='calendar' />
                <div id="reader" width="600px" />
              </MDBox>
           
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProgrammeJaugeage;