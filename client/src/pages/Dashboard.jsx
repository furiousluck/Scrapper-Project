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
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const fetchIDNumber = async () => {

    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
    }
    };

    try {
      const response = await axios.get("https://scrapper-service-1.onrender.com/api/v1/dashboard", axiosConfig)
      setId(response.data.data);
      console.log("ID is ",response.data.data);
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  }

  const fetchData = async () => {
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      console.log("ID Number is ",id);
      const link = `https://scrapper-service.onrender.com/${id}/articles`;
      console.log(link);
      const response = await axios.get(`https://scrapper-service.onrender.com/${id}/articles`, axiosConfig);
      // const response = await axios.get(link, axiosConfig);
      setData(response.data["articles"]);
      console.log(response.data["articles"]);
      setCheck(true);
    } catch (error) {
      toast.error(error.message);
    }
  }
  
  const handleRead = (row) => {
    setReadRows(prevReadRows => [...prevReadRows, row._id]);
    window.open(row.link, '_blank');
    console.log(id);

  };

  const handleDelete = async (row) => {
    let axiosConfig = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      const linkdata = row.title.replace(/[^\w\s]/gi, '');
      const response = await axios.post(`https://scrapper-service.onrender.com/articles/${id}/${linkdata}`, axiosConfig);
      toast.success("Article deleted successfully");
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
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
        sortDirection: 'desc',
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
          <div className='button-read-delete'>
            <button onClick={() => handleRead(row)}>Read</button>
            <button onClick={() => handleDelete(row)}>Delete</button>
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
      fetchIDNumber();
    }
  }, [token,id]);

  return (
    <div className='dashboard-main'>
      <h1>Dashboard</h1>
      {check &&
        (<div className='update' style={{ width: '100%', overflowX: '100%' }}>
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