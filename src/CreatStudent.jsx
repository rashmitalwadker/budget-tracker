import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
export default function CreatStudent(){
    const[id,setId]=useState("");
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    const[author,setAuthor]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
      e.preventDefault();
      const studentData={id,title,description,author};

      console.log(studentData);
        fetch("http://localhost:8000/users",{
     
         method:'POST',headers:{
            "content-type":"application/json"},
        body:JSON.stringify(studentData)
        
     }).then((res)=>alert("your data submitted successfully"),navigate("/")).catch((err)=>
        console.log(err.message))
      
     };
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="text"id="id" name="id" value={id}required onChange={e=>setId(e.target.value)}/><br/><br/>
      <label htmlFor="title">TITLE:</label>
      <input type="text" id="title"value={title}required onChange={e=>setTitle(e.target.value)}name="title"/><br/>
<br/>
      <label htmlFor="description">DESCRIPTION:</label>
      <input type="text"id="description" name="description"value={description}onChange={e=>setDescription(e.target.value)}/>
<br/><br/>
      <label htmlFor="author">AUTHOR:</label>
      <input type="text" name="author" id="author"value={author} required onChange={e=>setAuthor(e.target.value)}/><br/>
    <br/><br/>
    <button className="btn btn-primary">SAVE</button>
    <Link className="btn btn-sucesses"to="/">BACK</Link>
    </form>
    </div>
  )
}

