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
import MDBadge from "components/MDBadge";

import MDButton from "components/MDButton";
import Icon from '@mui/icons-material/Visibility';

export default function buildResultatData(data,handleOpen) {
    const Etat = ({ etat }) => (
        <MDBox lineHeight={1} textAlign="left">
           {etat === "Devant" ? 
            <MDBadge badgeContent={etat} color="success" variant="gradient" size="md" />:
            <MDBadge badgeContent={etat} color="primary" variant="gradient" size="md" />
           }
        </MDBox>
      );
      const Demande = ({ demande }) => (
        <MDBox lineHeight={1} textAlign="left">
           <MDTypography component="p" fontWeight="medium">{demande.denomination}</MDTypography>
           <MDTypography component="p" fontWeight="medium">{demande.id_chassis_citerne}</MDTypography>
           <MDTypography component="p" fontWeight="medium">{demande.id_chassis_tracteur}</MDTypography>
        </MDBox>
      );
  return {
    columns: [
      { Header: "Demande", accessor: "demande", align: "left" },
      { Header: "Etat", accessor: "etat", align: "left" },
      { Header: "Valeur", accessor: "valeur", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: data.map( (line) => (
                {
                    demande: (
                      <Demande demande={line.demande} />
                    ),
                    etat: (
                      <MDBox ml={-1}>
                       <Etat etat={line.etat}/>
                      </MDBox>
                    ),
                    valeur: (
                        <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
                          {line.valeur}
                        </MDTypography>
                      ),
                    date: (
                      <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
                        {line.date}
                      </MDTypography>
                    ),
                    action: (
                      <MDButton  color="info" size="small" onClick={()=>handleOpen(line.id)} >
                      <Icon>visibility</Icon>
                      </MDButton>
                    ),
                }
              )
        )
  }
}