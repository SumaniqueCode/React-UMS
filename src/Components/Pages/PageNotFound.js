import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../Images/404-error.png"

const PageNotFound = () =>{
    return(
        <div className = " hide-navbar d-flex align-items-center justify-content-center vh-100">
            <div className = "text-center row">
                <div className = " col-md-6">
                    <img src={pic} alt="" className = "img-fluid"/>
                </div>
                <div className = " col-md-6 mt-5">
                    <p className = "fs-3"> <span className = "text-danger">Opps!</span> Page not found.</p>
                    <p className = "lead">
                        The page you are looking for doesnot exist.
                    </p>
                    <NavLink to="/" className = "btn btn-primary">Go Home</NavLink>
                </div>

            </div>
        </div>
    );
}
export default PageNotFound;