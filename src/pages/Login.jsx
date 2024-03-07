import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from  "react-router-dom";
import { useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {

    const navigate=useNavigate();

	const [formData, setFormData] = useState({
		Email: '',
		password: '',
	  });

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
		  ...prevFormData,
		  [name]: value,
		}));
	  };

    const handleSubmit = async (event) => {
        event.preventDefault();
		try{
			const response=await axios.post("https://dashboard-server-2dvk.onrender.com/otp/login",formData);
			
			//const expiresDate = new Date();
			//expiresDate.setDate(expiresDate.getDate() + 7);

			const token=response.data.token;
			Cookies.set("token", token);
			
			navigate('/dashboard');
            alert('Login Successful!');
			
		} catch (error){
          alert(error);
        }
      };
	//    if(document.cookie.indexOf('token=')>-1){
	// 	navigate('/dashboard');
	//  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Login!</h1>
		<form  onSubmit={handleSubmit}>
			<div className="mb-4">
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" value={formData.Email} name="Email" onChange={handleInputChange} id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required />
				</div>
			<div className="mb-4">
				<label 
				htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" value={formData.password} name="password" onChange={handleInputChange} id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
			</div>
			<div className="flex items-center justify-between mb-4">
				
                <Link to="/Signup" className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</Link>
			</div>
			<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
		</form>
	</div>
</div>
    </>
  )
}

export default Login