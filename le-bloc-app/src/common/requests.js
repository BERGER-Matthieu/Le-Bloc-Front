import axios from "axios";

const queryParameters = new URLSearchParams(window.location.search)

export const TryRegister = async (data, cookies, socket) => {
    return axios({
        method: 'put',
        url: 'http://localhost:3001/LBB/createUser',
        data: data,
    })
    .then((res) => {
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const TryLogin = async (data, cookies, socket) => {

    return axios({
        method: 'post',
        url: 'http://localhost:3001/LBB/loginUser',
        data: data,
    })
    .then((res) => {
        cookies.setCookie('token', res.data);
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const SendMessage = async (data, cookies, socket) => {
    const messageContent = {
        senderToken: cookies.cookies.token,
        receiverId: queryParameters.get("receiverId"),
        content: data.message,
    }
    return axios({
        method: 'post',
        url: 'http://localhost:3001/LBB/sendMessage',
        data: messageContent,
    })
    .then((res) => {
        socket.emit('message', messageContent);
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const GetUserById = async (data, cookies, socket) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/LBB/getUserById',
        data: {
            _id: data.id,
        },
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const TryCreateSpot = async (data, cookies, socket) => {
    return axios({
        method: 'put',
        url: 'http://localhost:3001/LBB/createSpot',
        data: data,
    })
    .then((res) => {
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}