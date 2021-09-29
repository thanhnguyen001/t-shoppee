import axiosClient from "./callApi"

const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    getProduct: (id) => {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    }
}

export default productApi