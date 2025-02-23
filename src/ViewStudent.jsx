import React,{useEffect,useState} from 'react'
import {useParams,Link} from'react-router-dom';
const ViewStudent = () => {
  const[studentData,setStudentData]=useState({});
  const{studentid}=useParams();
  console.log(useParams());
  console.log(studentid);
  useEffect(()=>{
    fetch("http://localhost:8000/users/:studentid"+studentid).then((res)=>res.json()).
    then((data)=>setStudentData(data))
    .catch((err)=>console.log(err.message));
  });
  return ( <>     
    <h1>BOOK Details</h1>

    {
      studentData && <div className='container'>
      <p><strong>ID:</strong>{studentData.id}</p>
      <p><strong>TITLE:</strong>{studentData.title}</p>
      <p><strong>DESCRTIOTION:</strong>{studentData.description}</p>
      <p><strong>AUTHOR</strong>{studentData.author}</p>
      <Link to="/"><button>BACK</button></Link>
    </div>
}
</>)
}

export default ViewStudent;
