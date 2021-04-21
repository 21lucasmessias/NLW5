import React from 'react';
import { StatusBar } from 'react-native';
import UserIdentification from './pages/UserIndetification';

const Routes = () => {
    return(
        <>
            <StatusBar barStyle='dark-content' backgroundColor='#ffffff'/>
            <UserIdentification />
        </>
    )
}

export default Routes;