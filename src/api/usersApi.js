import axiosClient from "./callApi";

const userApi = {
    getAll: (params) => {
        const url = '/users';
        return axiosClient.get(url, { params });
    },
    getUser: (id) => {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
    postUser: (data) => {
        const url = `/users`;
        return axiosClient.post(url, data);
    }
}

export default userApi;