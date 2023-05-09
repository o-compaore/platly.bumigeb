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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "./layouts/dashboard";
import Profile from "./layouts/profile";

// Platly interfaces
import Vehicule from "./pages/vehicules";
import DemandeList from "./pages/commercial/demandeJaugeage";
import DemandeInfo from "./pages/commercial/demandeJaugeageInfo";
import DemandeNew from "./pages/commercial/demandeJaugeageNew";
import ResultatJaugeageList from "./pages/technique/resultatJaugeage";
import ResultatJaugeageNew from "./pages/technique/resultatJaugeageNew";
import ProgrammeJaugeage from "./pages/technique/programmeJaugeage";

// Login Page
// import SignIn from "layouts/authentication/sign-in";

// @mui icons
import Icon from "@mui/material/Icon";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventIcon from '@mui/icons-material/Event';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PostAddIcon from '@mui/icons-material/PostAdd';

function Logout (){
  const myHeaders = {
    "Authorization": `Token ${localStorage.getItem('token')}`,
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  }
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }; 
  fetch("http://localhost:8000/api/authentification/logout/", requestOptions)
  .then(response => {
    if(response.status===200){
      console.log('Ok ')
    }
  })
  localStorage.clear()
  window.location.replace(`/tableau-de-bord`);
}

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/tableau-de-bord",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Vehicules",
    key: "tables",
    icon: <LocalShippingIcon fontSize="small" />,
    route: "/vehicules",
    component: <Vehicule />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    title: "Service Commercial",
  },
  {
    type: "collapse",
    name: "Liste des demandes",
    key: "demande-jaugeage",
    icon: <ReceiptIcon fontSize="small" />,
    route: "/demande-jaugeage/liste",
    component: <DemandeList />,
  },
  {
    type: "collapse",
    name: "Info demande",
    key: "demande-jaugeage-info",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/demande-jaugeage/info/:id",
    component: <DemandeInfo />,
  },
  {
    type: "collapse",
    name: "Nouvelle demande",
    key: "demande-jaugeage-nouveau",
    icon: <PostAddIcon fontSize="small" />,
    route: "/demande-jaugeage/nouveau",
    component: <DemandeNew />,
  },

  {
    type: "divider",
  },
  {
    type: "title",
    title: "Service Technique",
  },
  {
    type: "collapse",
    name: "Programme de jaugeage",
    key: "programme-jaugeage",
    icon: <EventIcon fontSize="small" />,
    route: "/programme-jaugeage",
    component: <ProgrammeJaugeage />,
  },
  {
    type: "collapse",
    name: "Resultat de jaugeage",
    key: "resultat-jaugeage-info",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/resultat-jaugeage/liste",
    component: <ResultatJaugeageList />,
  },
  {
    type: "collapse",
    name: "Nouveau resultat",
    key: "resultat-jaugeage-nouveau",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/resultat-jaugeage/nouveau/:id",
    component: <ResultatJaugeageNew />,
  },
  {
    type: "divider",
  },
  {
    type: "title",
    title: "Compte Utilisateur",
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Se déconnecter",
    key: "logout",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/logout",
    component: <Logout />,
  },
 
];

export default routes;
