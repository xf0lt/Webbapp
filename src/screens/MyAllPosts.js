/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState, useEffect} from 'react'
import {API_BASE_URL} from '../config/constant';
import {Link, useNavigate} from 'react-router-dom'
import {useParams } from 'react-router-dom'
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../App';

function MyAllPosts() {

   const navigate = useNavigate();

   const [posts, setPosts] = useState([]);
   const [loader, setLoader] = useState(false)
   const {state, dispatch} = useContext(UserContext)   

   function alertFunction(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-success alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      var alertPlaceholder = document.getElementById("alertMsg")
      alertPlaceholder.append(wrapper)
   }


   const deletePost = (postsId) => {
      // console.log(postsId)
      let action = window.confirm('are you sure deleted?');
      if(action){
         axios.delete(`${API_BASE_URL}/posts/${postsId}`)
         .then((resp) => {
            console.log(resp)
            alertFunction(`Post With Id ${postsId} has been deleted!`, 'success')
            navigate('/myposts');
         })
         .catch((err) => {
            console.log(err )
            alertFunction('Error occured while deleting the post', 'danger')
         });
      }

   }

   const getAllPosts = () => {
      console.log(state);
      if(state){
         fetch(`${API_BASE_URL}/posts?userId${state.user.id}`)
            .then((response) => response.json()) 
            .then((json) => {
         // console.log(json)
            setPosts(json) 
            setLoader(false)
         });
      }
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
                        <div className="d-flex justify-content-between">
                           <Link to={`/posts/${posts.id}/${posts.userId}`} className="btn btn-primary text-uppercase"><i className='fa-solid fa-location-arrow me-1'></i>Details</Link>
                           <Link to={`/create/${posts.id}/${posts.userId}`} className="btn btn-warning text-uppercase"><i className="fa-solid fa-pen-to-square me-1"></i>Edit</Link>
                           <button onClick={() => {deletePost(posts.id)}} className="btn btn-danger text-uppercase"><i className='fa-solid fa-trash me-1'></i>Delete</button>
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

export default MyAllPosts 