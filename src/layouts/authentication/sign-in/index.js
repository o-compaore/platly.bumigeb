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

import { useState } from "react";


// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

// API URL
import URL from "statics"

function Basic() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
  const handleSubmit = () => {
    const postData = {email,password}
    fetch(URL.LOGIN_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    }).then(response => {
      if(response.status===200){
        return response.json()
      }
      return null
    })
    .then(resData => {
      if(resData){
        localStorage.setItem('token', resData.access_token);
        localStorage.setItem('user_role', resData.user_role);
        localStorage.setItem('expire_in', resData.expire_in);
        localStorage.setItem('user_name', resData.user_name);
        localStorage.setItem('user_mail', resData.user_mail);
      }else{
        console.log("Error")
      }
    })
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Connexion
          </MDTypography>
          
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Email" fullWidth value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" fullWidth value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </MDBox>
        
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={()=>handleSubmit()}>
                Connecter
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
