/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState, useEffect} from 'react'
import {API_BASE_URL} from '../config/constant';
import {Link, useNavigate} from 'react-router-dom'
import {useParams } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../App';

function AllPosts() {

   const [posts, setPosts] = useState([]);
   const [loader, setLoader] = useState(false)
   
   const getAllPosts = () => {
      setLoader(true)
      fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json()) 
      .then((json) => {
         setPosts(json) 
         setLoader(false)
      });
   }

   useEffect(() => {
      getAllPosts();
   }, []);
   
   return (
      <div >
         <section className='container pt-2'>
            <h3 className='text-center text-uppercase py-4'>ALL posts</h3>
               <div id="alertMsg"></div>
            <div className="row">
               {loader ? 
                  <div className='col-12 text-center'>
                     <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                     </div>
                  </div>
               : posts.map((posts, index) => {
                  return <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-2">
                     <div className="card">
                        <img style={{height: "280px"}} src="https://source.unsplash.com/random/800*400/?city,night" className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{posts.title}</h5>
                        <p className="card-text">{posts.body}</p>
                        <div className="d-grid w-100 border border-primary">
                           <Link to={`/posts/${posts.id}/${posts.userId}`} className="btn btn-primary text-uppercase"><i className='fa-solid fa-location-arrow me-1'></i>Details</Link>
                        </div>
                        </div>
                     </div>
                  </div>
               })
               }
            </div>
         </section>
      </div>
   )
}

export default AllPosts