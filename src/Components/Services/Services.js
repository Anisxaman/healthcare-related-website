import "./Services.css"

import React from 'react';
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
   const {bonus}= useParams();
   const {data}= useAuth();
   const tonus=parseInt(bonus)
   console.log(data)

   const result = data.find( ({ id }) =>id===tonus);

console.log(result)

const {allContext}=useAuth();

const {isLoading}=allContext;
if(isLoading){
    return (<div class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>)
}
// const{img,name,description,phone,mail}=result;

 
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{marginTop:"200px"}}>

              

                {/* <h1>This is services</h1>
                <h2>{bonus}</h2>
                <h2>{result.name}</h2> */}

<div class="card"style={{width: "38rem"}}>
  <img src={result?.img} class="card-img-top img-fluid" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{result?.name}</h5>
    <p class="card-text">{result?.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <Link href="#" class="card-link">Card link</Link>
    {/* <Link href="#" class="card-link">Another link</Link> */}
    <div className="d-flex justify-content-between">
    
    <h3>{result?.phone}<FontAwesomeIcon className="fw-3 text-danger ms-3" icon={faPhone}></FontAwesomeIcon></h3>
    
    <h3><FontAwesomeIcon className="fw-3 text-danger me-3" icon={faAt}></FontAwesomeIcon>{result?.mail}</h3>

    </div>
  </div>
</div>
           

            </div>
         
        </>
    );
};

export default Services;