import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const Dashboard = () => {
  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const [ data1, setData ] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      const response = await axios.get("https://scrapper-service.onrender.com/articles", axiosConfig);
      setData(response.data["articles"]); // Assuming the response is an array of objects
      console.log(response.data["articles"]);
      setCheck(true);
    } catch (error) {
      toast.error(error.message);
    }

  }
  const columns = [
    {
        name: 'url',
        selector: row => row.link,
        cell: row => <a href={row.link} target="_blank" rel="noopener noreferrer">{row.link}</a>,
    },
    {
        name: 'hacker news url',
        selector: row => row.url,
    },
    {
        name: 'posted on',
        selector: row => row.time,
        sortable: true,
    },
    {
        name: 'upvotes',
        selector: row => row.upvotes,
    },
    {
        name: 'comments ',
        selector: row => row.comments,
    },
];
  useEffect(() => {
    if(token === ""){
      navigate("/login");
      toast.warn("Please login first to access dashboard");
    }
    else {
      fetchData();
    } 
  }, [token]);

  return (
    <div className='dashboard-main'>
      <h1>Dashboard</h1>
      {check &&
        (<div className='update'>
            <DataTable
                columns={columns}
                data={data1}
                pagination
                />
    </div>)}
      <Link to="/logout" className="logout-button">Logout</Link>
    </div>
  )
}

export default Dashboard