import React from 'react'
import'./App.css';
import { Link,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
const StudentTable = () => {
    const[users,setUsers]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('http://localhost:8000/users').then((res)=>res.json()).then((data)=>
            setUsers(data))
    .catch((err)=>
        console.log(err.message))
    },[]);
    const DisplayDetails=(id)=>{
        navigate("/student/view/studentid"+id);
    }
    
  return (
    <div className="table-container">
<Link to="/student/create"type="button"><button>ADD NEW STUDENT</button></Link>
<table className='tav'>
<thead>
    <tr>
<th>ID</th>
<th>TITLE</th>
<th>DECRIPTION</th>
<th>AUTHOR</th>
<th>ACTION</th>
</tr>
</thead>
<tbody>
{ users && users.map((item)=>   
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.title} </td>
<td>{item.description}</td>
<td>{item.author}</td>
<td>
<button onClick={()=>DisplayDetails(item.id)} className="btn">VIEW</button>
<button className="btn2">ADD</button>
<button className="btn3">EDIT</button>
<button className="btn4">DELETE</button>
</td>

</tr>
)}
</tbody>



</table>
    
    
    
    </div>
  )
}

export default StudentTable
