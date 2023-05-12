import axios from "axios";

axios.defaults.baseURL = 'https://swapi.dev/api';
// axios.defaults.withCredentials = true;

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url+'/?format=json').then(responseBody),
    post: (url, body, params) => axios.post(url+'/?format=json', body, params).then(responseBody),
    put: (url, body, params) => axios.put(url+'/?format=json', body, params).then(responseBody),
    del: (url, params) => axios.delete(url+'/?format=json', params).then(responseBody),
}

const Swapi = {
    api: () => requests.get(''),
    films: () => requests.get('/films')
}

// const Autorization = {
//     login: (email) => requests.get(`/Auth/Authenticate?email=${email}`),
//     registration: (email, password, fullName) => {
//         let body = {
//             email: email,
//             password: password,
//             passwordConfirm: password,
//             fullName: fullName,
//             rank: 1,
//         }
//         return requests.post('/Auth/Register', body)
//     },
// }




const agent ={
    Swapi,
}

export default agent;