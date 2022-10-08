import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import { connect } from 'react-redux';
const Header = (props) => {
  return (
    <nav>
      <div className="logo">
      <h1><span>U</span>noBank<span>.</span></h1>
      </div>
      <ul className="nav-links">
       <Link to="/"><li>Home</li></Link>
       <li>About</li>
       <li>Loans</li>
       <Link to='/user'><li>Users</li></Link>
      </ul>
      <div className="buttons">
        {
          props.user?(
           <Link to="/user"> <div className="profile-icon"><p>{props?.user?.name[0]}</p></div></Link>
          ):(
            <Link to="/login"> <button>
            Signin
         </button></Link>
          )
        }
    
      </div>
    </nav>
  )
}

const mapStateToProps=(state)=>{
  return{user:state?.user?.user}
 }
 export default connect(mapStateToProps)(Header)