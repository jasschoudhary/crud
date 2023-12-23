import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'


const Homecrud = () => {
  return (
    <section id={style.nav}>
        <Link to ="/">CREATE-USERS</Link>
        <Link to ="/users">USERS</Link>
        {/* <Link to ="/editusers">EditUsers</Link> */}
    </section>
  )
}

export default Homecrud
