// import { faInfo,checkSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Body from '../Body/Body';
// import Footer from '../Footer/Footer';
import img1 from "../../images/10.jpg"
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {

    const [data, setdata] = useState([])



    useEffect(() => {
       fetch("./FakeData.json")
       .then(res=>res.json())
       .then(data=>setdata(data))
       console.log(data)
        }, [])












    return (
        <div className="overflow-hidden">
            <Banner></Banner>

          <div className='row'>
          {
                data.map(info=><Body
                key={info.id}
                info={info}
                
                
                
                
                
                ></Body>)
            }
            
          
          </div>
           <div>

         <div className="text-center">
         <h1> ABOUT <span className="text-success fs-1 fw-bolder" data-aos="zoom-in-left" data-aos-duration="3000" >MEDICAL</span></h1>
         </div>
               <div className="row g-0">
                   <div className="col-lg-8 col-12">
                       <img  className="img-fluid" src={img1} alt="" />

                   </div>
                   <div className="col-lg-4 col-12 bg-info p-4" >
                       <h1 className="fw-bold text-black"><span className="text-danger">SPECIALTY MEDICINE WITH COMPASSION</span> AND CAR PROIN GRAVIDA NIBH VEL VELIT</h1>

                       <h4 className="text " data-aos="zoom-in-left" data-aos-duration="3000">
                       Proin Gravida Nibh Vel Velit Auctor Aliquet. Aenean Sollicitudin, Aks Lorem Quis Bibendum Auctor, Nisi Elit Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Duis Sed Odio Sit Amet Nibh Vulputate..

Aenean Sollicitudin, Lorem Quis Bibendum Auctor, Nisi Elit Consequat Ipsum, Nec Sagittis Sem Nibh Id Elit. Duis Sed Odio Sit.
                       </h4>

                       <ul className="fs-3 p-3">
                                <p data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Health Care For All Types</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Emergency Services</span></p>
                                <p  data-aos="fade-left" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>Dental Care Dentist.</span></p>
                                <p  data-aos="fade-right" data-aos-duration="3000"><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon><span>24/7 Services</span></p>
                            </ul>

                   </div>
               </div>
              
           </div>

            
        </div>
    );
};

export default Home;