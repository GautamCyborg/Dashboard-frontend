import Navbar from '../components/Navbar';
import React from 'react'
import axios from 'axios';
import Card from '../components/Card';

const usersData=[];

axios.get("https://dashboard-server-2dvk.onrender.com/user/alluser").then((res)=>{
  const data = res.data;
    for (let i = 0; i < data.length; i++) {
      usersData.push(data[i]);
    };
    return usersData;
});

const Dashboard = () => {

  return (    
    <>
    <Navbar/>
    {usersData.map((user)=>(
      <Card key={user.id} user={user}/>
    ))}
    </>
  )
}

export default Dashboard