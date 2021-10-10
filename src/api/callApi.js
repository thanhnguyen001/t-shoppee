import axios from 'axios';
import firebase from 'firebase';

const getFireBaseToken = async () => {
	const currentUser = firebase.auth().currentUser;
	if (currentUser) return currentUser.getIdToken();

	if (!currentUser) return null;

	return new Promise((resolve, reject) => {

	  const waitTimer = setTimeout(() => {
	    reject(null);
	    console.log('Reject timeout');
	  }, 10000);

	  const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
	    //   setIsSignedIn(!!user);
	    if (!user) {
	      // user logs out, handle something here
	      reject(null)
	      return;
	    }
	    // console.log(user);
	    const token = await user.getIdToken();
	    if (token) {
	      console.log('axios: ', token)
	    }
	    resolve(token);

	    unregisterAuthObserver();
	    clearTimeout(waitTimer);
	  });
	})

}

const apiUrl = process.env.NODE_ENV === 'production'
	? 'https://t-shoppee-demo.herokuapp.com/api' : "http://localhost:1368";

const axiosClient = axios.create({
	baseURL: apiUrl,
	headers: { 
		'Content-Type': 'application/json',
		Authorization: `Bearer ` + localStorage.getItem('TOKEN')
	},
});

axiosClient.interceptors.request.use(async (config) => {
	// Do something before request is sent
	const token = await getFireBaseToken();
	if (token) {
		// config.headers.Authorization = `Bearer ${token}`;
		// console.log(token)
		localStorage.setItem('TOKEN', token);
	}

	return config;

}, (error) => {
	// Do something with request error
	return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use((response) => {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	if (response && response.data) {
		return response.data;
	}

}, (error) => {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	return Promise.reject(error);
});

export default axiosClient