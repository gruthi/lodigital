import React from 'react';
import { Redirect } from 'react-router-dom';

const LogOut =props=> {
    props.setUser(Null);
        return (
            <Redirect to='/'/>
        );
    
}

export default LogOut;