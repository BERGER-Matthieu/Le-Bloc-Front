import axios from "axios";

const queryParameters = new URLSearchParams(window.location.search)

export const TryRegister = async (data, cookies) => {
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

export const TryLogin = async (data, cookies) => {

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

export const SendMessage = async (data, cookies) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/LBB/sendMessage',
        headers: {
            'Authorization': `Bearer ${cookies.cookies.token}`
        },
        data: {
            senderToken: cookies.cookies.token,
            receiverId: queryParameters.get("receiverId"),
            content: data.message,
        },
    })
    .then((res) => {
        return({status: res.status})
    })
    .catch((res) => {
        return({status: res.response.status, data: res.response.data})
    })
}

export const tryCreateBloc = async (data) => {
    return axios({
      method: "post",
      url: "http://localhost:3001/LBB/createBloc",
      data: data,
    })
      .then((res) => {
        return { status: res.status };
      })
      .catch((res) => {
        return { status: res.response.status, data: res.response.data };
      });
  };


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