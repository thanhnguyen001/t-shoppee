import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SignForm from '../components/SignForm/SignForm';
// import * as Yup from 'yup';
import './SignPage.scss';


function SignPage({ history, match }) {

    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });

        return () => {
            unListen();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="shop-sign">
           <SignForm match={match}/>
        </div >
    )
}

export default withRouter(SignPage)
