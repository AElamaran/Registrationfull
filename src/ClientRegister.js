import { useState } from "react";
import axios from 'axios';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { message } from 'antd';
const ClientRegister=()=> {

// States for registration
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setConfirmPassword] = useState('');
const role = "company";

	function  handleSubmit () {
		let validInputs = true;
		if (!email || !password || !confirmpassword || !name || !address || !city) {

			message.warning('Please fill the all fields');
			validInputs = false;


		}
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


		if (validInputs) {
			// message.success("Your Registration Success");
			console.log(name);
			console.log(address);




			axios.post('http://localhost:8000/api/register11',{name:name,email:email,Address:address,City:city,role:role,password: password,password_confirmation: password})
				.then(res=>
				{console.log(res.data);
					message.success("Your Registration Success");
				})
				.catch(e => {
					console.log(e.response);
					message.warning("same email cannot be used twice");
				});

			console.log("ÿou did");


		}
	}
	function validateEmail(email) {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}



	return (
		<div className="ClientRegisterform">
			<div>
				<h1 style={{color:"orangered", fontSize:35, fontStyle:"revert"}}><b>COMPANION</b></h1>
				<hr/>
				<h1><b>Client Registration</b></h1>
			</div>



		{/* Labels and inputs for form data */}
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
				<b>Submit</b>

			</button>
			<br/> <br/>

	</div>
);
}

export default ClientRegister;

