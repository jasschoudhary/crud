// import axios from 'axios'
// import React ,{useEffect , useState} from 'react'
// import style from "./home.module.css"

// const EditUsers = () =>
// {
//     let [name , setName] =useState("")
//     let [salary , setSalary] =useState("")
//     let [company , setCompany] =useState("")

//     let nameData=(e)=>{setName(e.target.value)}
//     let salaryData=(e)=>{setSalary(e.target.value)}
//     let companyData=(e)=>{setCompany(e.target.value)}

//   useEffect(()=>
//   {
//     axios.get("http://localhost:3000/USERS/3")
//     .then((resp)=>{
//       console.log(resp.data)

//     })
//     .catch(()=>{
//       console.log("something went wrong")
//     })

//   },[])

//   return (
//     <div id={style.myForm}>

//         <h1>Update User</h1>

//         <label >Name</label>
//         <input type="text"  value={name} onChange={nameData} />

//         <label >Salary</label>
//         <input type="text" value={salary} onChange={salaryData} />

//         <label >Company</label>
//         <input type="text" value={company} onChange={companyData} />

//         <button >Update</button>

//     </div>

//   )
// }
// export default EditUsers

import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { useParams } from "react-router-dom";

const EditUsers = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");

  const nameData = (e) => {
    setName(e.target.value);
  };

  const salaryData = (e) => {
    setSalary(e.target.value);
  };

  const companyData = (e) => {
    setCompany(e.target.value);
  };

  //to update the  data
  const handleUpdate = () => {
    const updatedData = {
      name: name,
      salary: salary,
      company: company,
    };
  

  axios
    .put(`http://localhost:3000/USERS/${id}`, updatedData)
    .then((resp) => {
      console.log(resp.data);
    })
    .catch((resp) => {
      console.log("some thing went ");
    });

};



  useEffect(() => {
    axios
      .get(`http://localhost:3000/USERS/${id}`)
      .then((resp) => {
        const user = resp.data;
        setName(user.name);
        setSalary(user.salary);
        setCompany(user.company);

        console.log(resp.data);
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }, [id]);

  return (
    <div id={
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      style.myForm}>
      <form>
        <h1>Update User</h1>

        <label>Name</label>
        <input type="text" value={name} onChange={nameData} />

        <label>Salary</label>
        <input type="text" value={salary} onChange={salaryData} />

        <label>Company</label>
        <input type="text" value={company} onChange={companyData} />

        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default EditUsers;
