import React from 'react'
import {Link} from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom'

function Footer() {
   return (
      <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{ minHeight: '20vh'}}>
         <div className="row pt-4 text-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
               <h5>Quick Links</h5>
                  <div className='d-flex flex-column mb-2' >
                     <a href="#" className='text-white p-1'>About us</a>
                     <a href="#" className='text-white p-1'>Our Post</a>
                     <a href="#" className='text-white p-1'>Our Team</a>
                     <a href="#" className='text-white p-1'>Contact us</a>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-2">
               <h5>Newsletter</h5>
               <div style={{minHeight:"8rem"}} className='d-flex flex-column justify-content-around' >
                     <input type="text" className='form-control' placeholder='Subscribe to the newsLetter'/>
                     <button className='btn btn-danger'>Subscribe</button>
                  </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
               <h5>Contact Address</h5>
               <div className='d-flex flex-column'>
                  <p><i className="px-1 fa-solid fa-location-arrow"></i>Jl.anngrek No.69</p>
                  <p>Depok</p>
                  <p>Jakarta</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer