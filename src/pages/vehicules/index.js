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

// Input components
import MDInput from './components/MDInput'
import MDButton from "./components/MDButton";
import Icon from "@mui/material/Icon";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import Modal from '@mui/material/Modal';

// Data
import buildvehiculesData from "./pages/vehicules/data";
import URL from "./statics";

function Vehicule() {
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:800,
    boxShadow: 24,
    p: 4,
  };
  
  const [columns,setColumnsData] = useState([]);
  const [rows,setRowsData] = useState([]);
  const [plate,setPlate] = useState('');
  const [fabriquant,setFabriquant] = useState('');
  const [model,setModele] = useState('');
  const [orientation,setOrientation] = useState('');
  const [date,setDate] = useState('');
  
  const [licence,setLicence] = useState('');
  const [image,setImage] = useState('');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchVehiculeMetaData = () => {
    const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(`${URL.VEHICLES_METADA_URL}?plaque=${licence}`,
    requestOptions)
    .then(response => response.json())
    .then(data => {
     console.log(data)
    })
  }

  const handeOpenModal = (img,licencePlate) => {
    setLicence(licencePlate)
    setImage(img)
    fetchVehiculeMetaData()
    handleOpen()
  }

  const fetchVehiculeData = () => {
    const myHeaders = {"Authorization": `Token ${localStorage.getItem('token')}`}
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(`${URL.VEHICLES_DATA_URL}?plaque=${plate}&fabriquant=${fabriquant}&model=${model}&orientation=${orientation}&date=${date}`,
    requestOptions)
    .then(response => response.json())
    .then(data => {
      const res = buildvehiculesData(data,handeOpenModal)
      setColumnsData(res.columns)
      setRowsData(res.rows)
    })
  }
  const handleSearch = () => {
    fetchVehiculeData()
  }
  useEffect(() => {
    fetchVehiculeData()
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
                <MDTypography variant="h6" color="white">
                  Vehicules
                </MDTypography>
              </MDBox>
              <MDBox mx={3} mt={5}>
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <Grid item  >
                    <MDInput type="search" mx={3} label="Immatriculation" value={plate} onChange={(event)=>setPlate(event.target.value)} />
                  </Grid> 
                  <Grid item  >
                    <MDInput type="search" mx={3} label="Fabriquant" value={fabriquant} onChange={(event)=>setFabriquant(event.target.value)} />
                  </Grid> 
                  <Grid item  >
                    <MDInput type="search" mx={3} label="Modèle" value={model} onChange={(event)=>setModele(event.target.value)} />
                  </Grid> 
                  <Grid item >
                    <MDInput type="date" mx={3} value={date} onChange={(event)=>setDate(event.target.value)} />
                  </Grid> 
                  
                  <Grid item mx={3} >
                    <Box sx={{ minWidth: 120}} md={3}>
                    <FormControl sx={{ m: 1, width: 120, height: 20 }}>
                        <InputLabel id="orientation">Orientation</InputLabel>
                        <Select
                          labelId="Orientation"
                          id="orientation"
                          value={orientation}
                          label="Orientation"
                          input={<OutlinedInput label="Orientation" />}
                          onChange={(event) => setOrientation(event.target.value)}
                        >
                          <MenuItem value="Rear">Arrière</MenuItem>
                          <MenuItem value="Front">Devant</MenuItem>
                          <MenuItem value="Undefined">Indéfini</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid> 
                <Grid item>
                    <MDButton variant="gradient" color="info" iconOnly onClick={()=>handleSearch()}>
                      <Icon>search</Icon>
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
              <MDBox pt={3}>
               
                <DataTable table={{columns,rows}} noEndBorder isSorted={false} />
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
            <Card sx={style}>
              <Grid container spacing={6}>
                <Grid item>
                  {licence !== '' &&
                  <MDTypography id="modal-modal-title" variant="h6" component="h2">
                    {licence}
                  </MDTypography>}
                  <Box id="modal-modal-description" sx={{ mt: 2 }}>
                    <img widht="1000px" height="700px" id="img01" src={`${URL.VEHICLES_PHOTO_URL}?photo=${image}`} alt={licence}/>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Modal>
        </div>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Vehicule;
