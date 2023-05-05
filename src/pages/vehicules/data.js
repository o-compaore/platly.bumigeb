/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
// Materials Icon
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import URL from "statics";

export default function buildvehiculesData(data,handleOpen) {
  
  const Car = ({ image, licence }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar  onClick={() => handleOpen(image,licence)} src={`${URL.VEHICLES_PHOTO_URL}?photo=${image}`} name={licence} size="xl" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {licence}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Type = ({ type,color }) => (
    <MDBox lineHeight={1} textAlign="left">
      
      <MDTypography display="block" variant="h4" color={color} fontWeight="large" size="xl">
        {type === "Moto" ? <TwoWheelerIcon size="xl"/>:<LocalShippingIcon />}
      </MDTypography>
    </MDBox>
  );
  const Orientation = ({ orientation }) => (
    <MDBox lineHeight={1} textAlign="left">
       {orientation === "Devant" ? 
        <MDBadge badgeContent={orientation} color="success" variant="gradient" size="md" />:
        <MDBadge badgeContent={orientation} color="primary" variant="gradient" size="md" />
       }
    </MDBox>
  );

  return {
    columns: [
      { Header: "vehicule", accessor: "vehicule", width: "45%", align: "left" },
      { Header: "fabriquant", accessor: "fabriquant", align: "left" },
      { Header: "modèle", accessor: "model", align: "center" },
      { Header: "type", accessor: "type", align: "center" },
      { Header: "orientation", accessor: "orientation", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
    ],

    rows: data.map( (line) => (
                {
                    vehicule: <Car image={line.image} licence={line.licence} />,
                    fabriquant: (
                      <MDTypography component="p" variant="h6" color="text" fontWeight="medium">
                       {line.make}
                      </MDTypography>
                    ),
                    model: (
                      <MDTypography component="p" variant="h6" color="text" fontWeight="medium">
                        {line.model}
                      </MDTypography>
                    ),
                    orientation: (
                      <MDBox ml={-1}>
                       <Orientation orientation={line.orientation}/>
                      </MDBox>
                    ),
                    type: <Type type= {line.type} color={line.color} fontWeight="medium" />,
                    date: (
                      <MDTypography component="p" variant="h6" color="text" fontWeight="medium">
                        {line.date}
                      </MDTypography>
                    ),
                }
              )
        )
  }
}