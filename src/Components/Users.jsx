// import axios from 'axios'
// // import React from 'react'
// import React ,{useEffect , useState} from 'react'
// import style from "./home.module.css"
// import { Link } from 'react-router-dom'

// const Users = () => {
//   let [content ,setContent ] = useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:3000/USERS")
//     .then((resp)=>{
//       console.log(resp.data)
//       setContent(resp.data)
//     })
//     .catch(()=>{
//       console.log("there is no data")
//     })

//   },[])


//   return (
//     <div id={style.userPage}>
//       {content.map((x)=>{
//         return(
//           <div key={x.id} id={style.profile}>
//              <table>
//               <tr>
//                 <th colSpan="2">USER {x.id}</th>
//               </tr>
//                 <tr>
//                   <td>NAME</td>
//                   <td>: {x.name}</td>
//                 </tr>
//                 <tr>
//                   <td>SALARY</td>
//                   <td>: {x.salary}</td>
//                 </tr>
//                 <tr>
//                   <td>COMPANY</td>
//                   <td>: {x.company}</td>
//                 </tr>

//                 <tr >
//                   <td ><Link to={`/edit/${x.id}`}> <button >EDIT</button></Link></td>
//                   <td><button >DELETE</button></td>
//                 </tr>
              
//              </table>


//           </div>
//         )
//       })}
//     </div>


   
  
//   )
// }
// export default Users

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from './home.module.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/USERS')
      .then((resp) => {
        console.log(resp.data);
        setContent(resp.data);
      })
      .catch(() => {
        console.log('Failed to fetch data');
      });
  }, []);

  let deleteData=(user)=>{
    axios.delete(`http://localhost:3000/USERS/${user}`)
    window.location.assign("/users")
  }

  return (
    <div id={style.userPage}>
      {content.map((user) => (
        <div key={user.id} id={style.profile}>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">USER {user.id}</th>
              </tr>
              <tr>
                <td>NAME</td>
                <td>: {user.name}</td>
              </tr>
              <tr>
                <td>SALARY</td>
                <td>: {user.salary}</td>
              </tr>
              <tr>
                <td>COMPANY</td>
                <td>: {user.company}</td>
              </tr>
              <tr>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button>EDIT</button>
                  </Link>
                </td>
                <td>
                  <button onClick={()=>{deleteData(user.id)}}>DELETE</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Users;
