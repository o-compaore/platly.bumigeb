const BASE_URL = "http://localhost:8000"
const LOGIN_URL = `${BASE_URL}/api/authentification/signin/`
const DEMANDE_DATA_URL = `${BASE_URL}/api/services/get_demande_data/`
const DEMANDE_DATA_ADD_URL = `${BASE_URL}/api/services/add_demande_data/`
const RESULTAT_DATA_URL = `${BASE_URL}/api/services/get_resultat_jaugeage_data/`
const RESULTAT_DATA_ADD_URL = `${BASE_URL}/api/services/add_resultat_jaugeage_data/`
const QRCODE_DATA_URL = `${BASE_URL}/api/services/get_qrcode_data/`
const PROGRAMME_VISITE_DATA_URL = `${BASE_URL}/api/services/get_programme_visite_data/`
const PROGRAMME_VISITE_DATA_ADD_URL = `${BASE_URL}/api/services/add_programme_visite_data/`
const VEHICLES_DATA_URL= `${BASE_URL}/api/services/get_vehicule_data/`
const VEHICLES_PHOTO_URL = `${BASE_URL}/api/services/get_vehicule_photo/`
const VEHICLES_DELETE_URL = `${BASE_URL}/api/services/get_vehicule_photo/`
const VEHICLES_METADA_URL = `${BASE_URL}/api/services/get_vehicule_metada/`
const QRCODE_IMAGE_URL = `${BASE_URL}/api/services/get_qrcode_photo/`

export default { LOGIN_URL, BASE_URL,DEMANDE_DATA_URL, DEMANDE_DATA_ADD_URL, 
    RESULTAT_DATA_URL, QRCODE_DATA_URL,RESULTAT_DATA_ADD_URL, 
    PROGRAMME_VISITE_DATA_URL, PROGRAMME_VISITE_DATA_ADD_URL,
     VEHICLES_DATA_URL, VEHICLES_PHOTO_URL,VEHICLES_DELETE_URL, VEHICLES_METADA_URL, QRCODE_IMAGE_URL };