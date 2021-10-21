import axios from "axios";

export const getUsers = (page = 1, limit = 4) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
        .then(res => res.data)
}

export const getAuthMe = () => {
    return axios.get('http://localhost:3001/auth/me', {withCredentials: true})
        .then(res => res.data)
}

export const getUserById = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.data)
}