import Modal from 'react-modal';
import { useState} from "react";

function ModalUI(content) {
  const subtitle = "Omar";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('Ok')
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button type='button' id="openmodal" onClick={() => openModal()}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={() => afterOpenModal()}
        onRequestClose={() => closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle === _subtitle)}>Modal</h2>
        <button  type='button' onClick={() => closeModal()}>close</button>
       <div>{content}</div>
      </Modal>
    </div>
  );
}

const handleDelete = (id)=>{
  fetch(`http://localhost:8000/platerognizer/deletedemande?id=${id}`)
  .then(response => response.json())
  .then(res => {
    console.log(res)
  })
}

const handleInfo = (id)=>{
  fetch(`http://localhost:8000/platerognizer/getdemandedata?id=${id}`)
  .then(response => response.json())
  .then(res => {
    console.log(res)
  })
}

const handleEdit = (id)=>{
  fetch(`http://localhost:8000/platerognizer/deletedemande?id=${id}`)
  .then(response => response.json())
  .then(res => {
    console.log(res)
  })
}
const [cnib,setcnib] = useState();
const [denomination,setdenomination] = useState();
const [siege,setsiege] = useState();
const [adresse_postal,setadresse_postal] = useState();
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
        <MDTypography variant="caption">Nom et Prénom</MDTypography>
        <MDInput type="text" fullWidth autoFocus id="nomprenom" label="Nom et Prénom" readOnly value={nomPrenom} onChange={(event)=>setNomPrenom(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro du CNIB</MDTypography>
        <MDInput type="text" id="cnib" value={cnib} onChange={(event)=>setcnib(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Dénomination intégrale de la société</MDTypography>
        <MDInput type="text" id="denomination" value={denomination} onChange={(event)=>setdenomination(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Siége de la société</MDTypography>
        <MDInput type="text" id="siege" value={siege} onChange={(event)=>setsiege(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Adresse postale</MDTypography>
        <MDInput type="text" id="address" value={adressepostal} onChange={(event)=>setadressepostal(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro de téléphone</MDTypography>
        <MDInput type="text" id="tel" value={telephone} onChange={(event)=>settelephone(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">E-mail</MDTypography>
        <MDInput type="text" id="email" value={email} onChange={(event)=>setemail(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro d&apos;immatriculation au RCCM</MDTypography>
        <MDInput type="text" id="rccm" value={rccm} onChange={(event)=>setrccm(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro IFU</MDTypography>
        <MDInput type="text" id="ifu" value={ifu} onChange={(event)=>setifu(event.target.value)} />
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
        <MDTypography variant="caption">Numéro chassis de la citerne</MDTypography>
        <MDInput type="text" id="idchassisciterne" disableidchassisciterne value={idchassisciterne} onChange={(event)=>setidchassisciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro d&apos;immatriculation de la citerne</MDTypography>
        <MDInput type="text" id="licenceciterne" value={licenceciterne} onChange={(event)=>setlicenceciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Constructeur de la citerne</MDTypography>
        <MDInput type="text" id="constructeurciterne" value={constructeurciterne} onChange={(event)=>setconstructeurciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Nombre de compartiment de la citerne </MDTypography>
        <MDInput type="text" id="nbrcompatimentciterne" value={nbrcompatimentciterne} onChange={(event)=>setnbrcompatimentciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Capacité de la citerne</MDTypography>
        <MDInput type="text" id="capaciteciterne" value={capaciteciterne} onChange={(event)=>setcapaciteciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Date fabrication de la citerne</MDTypography>
        <MDInput type="text" id="datefabriqciterne" value={datefabriqciterne} onChange={(event)=>setdatefabriqciterne(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro chassis du tracteur</MDTypography>
        <MDInput type="text" id="idchassistracteur" value={idchassistracteur} onChange={(event)=>setidchassistracteur(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Numéro d&apos;immatriculation du tracteur</MDTypography>
        <MDInput type="text" id="licencetracteur" value={licencetracteur} onChange={(event)=>setlicencetracteur(event.target.value)} />
    </Grid>
    <Grid item >
        <MDTypography variant="caption">Marque du tracteur</MDTypography>
        <MDInput type="text" id="marquetracteur" value={marquetracteur} onChange={(event)=>setmarquetracteur(event.target.value)} />
    </Grid>
</Grid>
</MDBox>
