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
        console.log(cookies)
        cookies.setCookie('token', res.data);
        return({status: res.status, data: res.data})
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

export const GetSpotById = async (data, cookies, socket) => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/LBB/getSpotDataById/${data.id}`,
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const GetSpotImgById = async (data, cookies, socket) => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/LBB/getBlocImgById/${data.id}`,
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const GetBlocsBySpot = async (data, cookies, socket) => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/LBB/getBlocsBySpot/${data.name}`,
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const GetAllSpot = async (data, cookies, socket) => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/LBB/getAllSpot`,
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        console.log(res)
        return({status: res.response.status, data: res.response.data})
    })
}

export const GetUserByToken = async (data, cookies, socket) => {
    return axios({
        method: 'get',
        url: `http://localhost:3001/LBB/getUserByToken/${data.token}`,
    })
    .then((res) => {
        return({status: res.status, data: res.data})
    })
    .catch((res) => {
        console.log(res)
        return({status: res.response.status, data: res.response.data})
    })
}

export const TryCreateSpot = async (data, cookies, socket) => {
    return axios({
        method: 'put',
        url: 'http://localhost:3001/LBB/createSpot',
        data: {...data, token: cookies.cookies.token},
    })
    .then((res) => {
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const TryCreateBloc = async (data, cookies, socket) => {
    return axios({
        method: 'put',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: 'http://localhost:3001/LBB/createBloc',
        data: {...data, token: cookies.cookies.token},
    })
    .then((res) => {
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}


export const TryInputAddress = (query) => {
    return axios
      .get('http://localhost:3001/LBB/getAddress', {
        params: { q: query },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data; 
        } else {
          throw new Error(`Request failed with status ${response.status}`);
        }
      })
      .catch((error) => {
        throw new Error(`Error during API call: ${error.message}`);
      });
  };