import axios from 'axios'

export default() =>{
    return axios.create({
        BACKEND_URL : "http://127.0.0.1:8081"
    })
}