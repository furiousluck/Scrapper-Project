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
  const [readRows, setReadRows] = useState([]);
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
  const handleRead = (row) => {
    setReadRows(prevReadRows => [...prevReadRows, row._id]);
    window.open(row.link, '_blank');
  };
  const columns = [
    {
        name: 'url',
        selector: row => row.link,
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
    {
        name:"Action",
        cell: row =>(
          <div>
            <button onClick={() => handleRead(row)}>Read</button>
          </div>
        )
    }
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
                conditionalRowStyles={[
                  // Apply a different style to read rows
                  {
                    when: (row) => readRows.includes(row._id),
                    style: { backgroundColor: 'lightgrey' },
                  },
                ]}
                />
    </div>)}
      <Link to="/logout" className="logout-button">Logout</Link>
    </div>
  )
}

export default Dashboard