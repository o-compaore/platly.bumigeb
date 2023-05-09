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
import MDBox from "./components/MDBox";
import MDTypography from "./components/MDTypography"; 
import MDBadge from "./components/MDBadge";

import MDButton from "./components/MDButton";
import Icon from '@mui/icons-material/Visibility';


export default function buildDemandeData(data) {
    const Etat = ({ etat }) => (
        <MDBox lineHeight={1} textAlign="left">
          {etat === true && <MDBadge badgeContent="Valider" color="success" variant="gradient" size="md" />}
          {etat === false && <MDBadge badgeContent="Réjeter" color="error" variant="gradient" size="md" />}
        </MDBox>
      );
  
  return {
    columns: [
      { Header: "Nom&Prénom", accessor: "nom_prenom", align: "left" },
      { Header: "Société", accessor: "societe", align: "left" },
      { Header: "etat", accessor: "etat", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: data.map( (line) => (
                {
                    nom_prenom: (
                      <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
                       {line.nom_prenom}
                      </MDTypography>
                    ),
                    societe: (
                      <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
                        {line.societe}
                      </MDTypography>
                    ),
                    etat: (
                      <MDBox ml={-1}>
                       <Etat etat={line.etat}/>
                      </MDBox>
                    ),
                    date: (
                      <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
                        {line.date}
                      </MDTypography>
                    ),
                    action: ( 
                        <MDButton component="a" color="info" size="small" href={`/demande-jaugeage/info/${line.id}`}>
                          <Icon>visibility</Icon>
                        </MDButton>
                    ),
                }
              )
        )
  }
}