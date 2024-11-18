import {  useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Pages/Loading";


const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return (
        <div>
            <Navigate to={"/auth/login"} ></Navigate>
        </div>
    );
};

export default PrivateRoute;