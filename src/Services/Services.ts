import axios from 'axios'
import { API_URL } from '../config'

export const Service = {
    getCVInfoFromApi,
}

function getCVInfoFromApi() {
    return axios.post(`${API_URL}/getInfoCv`,{})
}