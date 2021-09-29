/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import PathRoutes from './routes';
import ScrollToTop from './ScrollToTop';
import firebase from 'firebase/app';

import { useDispatch } from 'react-redux';
import { addToCart, userSignIn } from './actions/actions';
import userApi from './api/usersApi';

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
    // ...
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
else {
    firebase.app(); // if already initialized, use that one
}
// firebase.initializeApp(config);

function App() {

    const dispatch = useDispatch();
    // const [users, setUsers] = useState([]);

    // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

    // Listen to the Firebase Auth state and set the local state.

    useEffect(() => {

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            //   setIsSignedIn(!!user);
            if (!user) {
                // user logs out, handle something here
                // console.log('user logs out');
                return;
            }
            // console.log(user);
            const token = await user.getIdToken();
            if (token) {
                // let userList = null;
                const fetchUserList = async () => {
                    const userList = await userApi.getAll();
                    // console.log(userList);
                    // setUsers(userList);
                    let isExist = true;
                    let index = null;
                    for (let i = 0; i < userList.length; i++) {
                        if (user.email === userList[i].email) {
                            isExist = false;
                            index = i;
                            // console.log('ok');
                            break;
                        }
                    }
                    if (isExist) {
                        const user1 = {
                            token,
                            username: user.displayName,
                            email: user.email
                        }
                        userApi.postUser(user1);

                        dispatch(userSignIn(user1));
                    }
                    else {
                        dispatch(userSignIn(userList[index]));
                        dispatch(addToCart(userList[index].cart));
                        // console.log(userList[index].cart)
                    }
                }

                fetchUserList();

                // console.log(user)
                // console.log("firebase-token: ", token);
            }
        });

        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

    return (
        <Fragment>
            <Router>
                <div className="App">

                    <ScrollToTop>
                        <PathRoutes />
                    </ScrollToTop>

                    <Footer />
                </div>

            </Router>
        </Fragment>
    );
}

export default App;
