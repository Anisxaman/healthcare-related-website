import "./Header.css"

import React from 'react';

import { Link, NavLink,useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    faSignInAlt, faSignOutAlt, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
const {allContext}=useAuth()
  const {user,logOut}=allContext;

  



  const history=useHistory();
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato"
        
    }

    const handleLogin=()=>{
      history.push("/login")
  }


    
    return (
        
      
        < >
        <div className="d-flex flex-column fixed-top ">

          
<nav className="navbar navbar-expand-lg navbar-dark primary  "  style={{ backgroundColor:"rgb(21, 20, 65)"}}   >

 
<div className="container-fluid" style={{ backgroundColor:"rgb(21, 20, 65)"}} >
  <a className="navbar-brand ms-5" style={{fontSize:"25px"}} href="/shop"><span className="focusName text-danger fw-bolder">LIFE LINE</span> HOSPITAL  <FontAwesomeIcon icon={faStethoscope} className="text-white ms-5 scope" style={{fontSize:"30px"}}></FontAwesomeIcon>
</a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink activeStyle={activeStyle} className="nav-link active" aria-current="page" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
       
        <NavLink activeStyle={activeStyle} className="nav-link" to="/services/any" >Services</NavLink>
      </li>
      <li className="nav-item">
                 <NavLink activeStyle={activeStyle} to="/doctors"  className="nav-link">Doctors</NavLink>
      </li>
      

      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="/gallery" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Gallery
        </Link>
        <ul class="dropdown-menu foat" aria-labelledby="navbarDropdownMenuLink">
          <li><NavLink class="dropdown-item" to="#">Gallery 2</NavLink></li>
          <li><NavLink class="dropdown-item" to="#">Gallery 3</NavLink></li>
          <li><NavLink class="dropdown-item" to="#">Gallery 4</NavLink></li>
        </ul>
      </li>



      
      <li className="nav-item">
        <NavLink  activeStyle={activeStyle} className="nav-link" to="/aboutUs">About us</NavLink>
      </li>



     {user.email?
           <li className="nav-item">
        
      
           <button onClick={ logOut}  type="button"   class="btn btn-success me-2"><FontAwesomeIcon className="text-dark me-2" icon={faSignOutAlt}></FontAwesomeIcon>Logout </button>
 
         </li>:
                <li className="nav-item">
          
            <button onClick={handleLogin}  type="button"   class="btn btn-success me-2"><FontAwesomeIcon className="text-dark me-2" icon={faSignInAlt}></FontAwesomeIcon>Login </button>

                  </li>





     }


{/* 
       <li className="nav-item">
        
      
       <button onClick={logOut}  type="button"   class="btn btn-success me-2"><FontAwesomeIcon className="text-dark me-2" icon={faDoorOpen}></FontAwesomeIcon>Logout </button>

      </li>
      <li className="nav-item">
      
        <button onClick={signInUsingGoogle}  type="button"   class="btn btn-success me-2"><FontAwesomeIcon className="text-dark me-2" icon={faDoorOpen}></FontAwesomeIcon>Login </button>

      </li> */}
   
  
    </ul>









    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-danger" type="submit">Search</button>
    </form>
  </div>
</div>





</nav>

<div  > 
<div className=" d-flex justify-content-between " style={{backgroundColor:"rgb(46, 200, 166)"}}>
{
                    user.email && <span className="text-white me-5 d-flex align-items-center fs-5 fw-bolder text-danger"><small>{user.displayName}</small></span> 
                } 
{
                    user.email && <span className="text-white me-5 d-flex align-items-center fs-5 fw-bolder text-danger"><small>{user.email}</small></span> 
                } 
</div>
</div>

        </div>
  
     



{/* -----------------------nav bar end------------------------------------------------ */}


        </>
    );
};

export default Header;