import axios from 'axios'
import { ACCESS_TOKEN, DOMAIN } from '../util/settings/config'

export class BasicServices {
    get = (url, model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        })
    }
    post = (url,model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN) }
        })
    }
    put = (url,model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)} 
        })
    }
    delete = (url,model) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.get}

        })
    }
}
