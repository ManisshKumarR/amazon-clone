import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
    const userSingin = useSelector((state) => state.userSignin);
    const { userInfo } = userSingin;

    return (
        <Route {...rest} render={(props) => userInfo ? (
            <Component {...props} />
        ) : (
            <Redirect to='/signin' />
        )}>

        </Route >
    );
}

export default PrivateRoute;