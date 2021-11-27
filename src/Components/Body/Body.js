import React from 'react';
import { useHistory } from 'react-router';
import "./Body.css"

const Body = (props) => {
   const {name,description,img,id}=props.info

const history=useHistory();


   const handleIndividual=()=>{
    history.push(`/services/${id}`);


   }


   const handlecontact=()=>{
    history.push("/aboutUs");


   }

    return (
        <div data-aos="zoom-in" data-aos-duration="2000"  className="col-lg-4   col-12  m-3 g-4 p-3 effect mx-auto" style={{borderRadius:"30px",backgroundColor:"#f8f9fa",width:"500px"}}>
            <div className="CustomCard">
                <div className="img-section">
                    <img className="img-fluid" style={{borderRadius:"30px"}} src={img} alt="" />

                </div>
                <div className='body'>
                    <div className="description">
                        <h1>{name}</h1>
                        <p>{description}</p>

                    </div>
                    <div className="buttons d-flex justify-content-between rounded p-2">
                        <div className="brn-one">
                        <button type="button" onClick={handlecontact} class="btn btn-danger">Contact</button>

                        </div>
                        <div className="brn-two">
                        <button type="button" onClick={handleIndividual} class="btn btn-danger">Show Detail</button>

                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Body;