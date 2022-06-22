import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="Register">
            <div className='Leftside'>
                <h2 className="companyName">COMPANION</h2>
                <h6 style={{color:"yellow"}}>Genuine People Always Choose Easiest Travelling</h6>
            </div>
            <div className='center'>
                    <h2 className="formname">Register</h2>
                    <li className='registerItem button'>
                        <Link to="/ClientRegister">Company</Link>
                    </li>
                    <li className='registerItem button'>
                        <Link to="/DriverRegister">Driver</Link>
                    </li>
                    <li className='registerItem button'>
                        <Link to="/VehicleRegister">Vehicle</Link>
                    </li>
            </div>
        </div>
    );
}

export default Register;



