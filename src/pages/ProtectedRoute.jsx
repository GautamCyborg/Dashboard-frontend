import React,{ useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const ProtectedRoute = ({ Component, ...props }) => {
  const [validToken, setValidToken] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const cookieValue = Cookies.get('token');
        const res = await axios.post('https://dashboard-server-2dvk.onrender.com/otp/validate', { token: cookieValue });
        if (res.data.Status) {
          console.log("if");
          setValidToken(true);
        } else {
          console.log("else");
          setValidToken(false);
        }
      } catch (error) {
        console.error('Error validating token:', error);
      }
    };
  
    fetchToken();
  }, []);

    console.log("valid Token",validToken);
    if(validToken)  return (<Component {...props} />);
    if(!validToken) return <Navigate to={'/'} />;
};

export default ProtectedRoute;