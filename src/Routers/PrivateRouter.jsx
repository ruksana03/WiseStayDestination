import {  useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Shared/Loader';

const PrivateRouter = ({ children }) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);


    if(loading){
        return <Loader></Loader>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
};

export default PrivateRouter;