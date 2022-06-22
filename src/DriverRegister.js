import { useState } from 'react';
import axios from 'axios';

 import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import { message } from 'antd';
const DriverRegister=()=> {

// States for registration
    const [nic, setNic] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    console.log(email,nic)
    const role = "vehicle";

    function  handleSubmit () {
        let validInputs = true;
        if (!email || !nic || !password || !confirmpassword || !name || !address || !city) {

            message.warning('Please fill the all fields');
            validInputs = false;


        }
    //     let pattern = new RegExp(/^(0|+94)\d^[0-9\b]\d{9}+$/);
    //
    //     if (!pattern.test(input["phone"])) {
    //
    //         isValid = false;
    //
    //         errors["phone"] = "Please enter only number and it should start with 0 or +94.";
    //
    //     }else if(input["phone"].length != 10){
    //
    //         isValid = false;
    //
    //         errors["phone"] = "Please enter valid phone number.";
    //
    //     }
    //
    // }

        // validationSchema={Yup.object({
        //         Password:Yup.String()
        //             .min(9,"password is too short")
        //             .max(40,"password is too long")
        //             .required(Required),
        //     })}


        let letters = /^[A-Za-z]+$/;
        if (!name.match(letters)) {
            message.warning("Wrong Name Format");
            validInputs = false;
        }
        if (!validateEmail(email)) {
            message.warning("wrong Email Format");
            validInputs = false;
        }
        if (password.length < 8) {
            message.warning("your password is less than 8");
            validInputs = false;
        }
        if (password != confirmpassword) {
            message.warning("Not match with Password");
            validInputs = false;
        }

        // let status;
        // if(status = 422){
        //     message.warning("Email is already used");
        //     validInputs= false;
        // }



        if (validInputs) {
            // message.success("Your Registration Success");

            axios.post('http://localhost:8000/api/register11',{nic:nic,name:name,email:email,Address:address,City:city,role:role,password: password,password_confirmation: password})
                .then(res=>
                {console.log(res.data);
                    message.success("Your Registration Success");
                })
                .catch(e => {
                    console.log(e.response);
                    message.warning("same email cannot be used twice");
                });




        }
    }


    function validateEmail(email) {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return (
        <div className="driverRegisterForm">
            <div>
                <h1 style={{color:"orangered", fontSize:35, fontStyle:"revert"}}><b>COMPANION</b></h1>
                <hr/>
                <h1><b>Driver Registration</b></h1>
            </div>


            {/* Calling to the methods */}
            {/*<div className="messages">*/}
            {/*    {errorMessage()}*/}
            {/*    {successMessage()}*/}
            {/*</div>*/}





                {/* Labels and inputs for form data */}
                <label className="label">NIC</label>
                <input  onChange={(e)=>{setNic(e.target.value)} }  className="input"
                       value={nic} type="text" />

                <label className="label">Name</label>
                <input  onChange={(e)=>{setName(e.target.value)} }   className="input"
                       value={name} type="text" />

                <label className="label">Address</label>
                <input onChange={(e)=>{setAddress(e.target.value)} }  className="input"
                       value={address} type="text" />

                <label className="label">City</label>
                <input onChange={(e)=>{setCity(e.target.value)} }  className="input"
                       value={city} type="text" />

                <label className="label">Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)} } className="input"
                       value={email} type="email" />

                <label className="label">Password</label>
                <input     onChange={(e)=>{setPassword(e.target.value)} } className="input"
                       value={password} type="password" />

                <label className="label">ConfirmPassword</label>
                <input onChange={(e)=>{       setConfirmPassword(e.target.value)} }  className="input"
                       value={confirmpassword} type="password" />
                <br/> <br/>

                <button className="btn" type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            <br/> <br/>

        </div>
    );
}

export default DriverRegister;

