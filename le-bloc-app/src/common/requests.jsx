import axios from "axios";

export const tryRegister = async (data) => {
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

export const tryLogin = async (data) => {
    return axios({
        method: 'post',
        url: 'http://localhost:3001/LBB/loginUser',
        data: data,
    })
    .then((res) => {
        document.cookie = `token=${res.data.token}`;
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
        console.log("la")
        return { status: res.status };
      })
      .catch((res) => {
        return { status: res.response.status, data: res.response.data };
      });
  };