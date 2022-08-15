import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { API_BASE_URL} from '../config/constant'
import './PostDetail.css'

function PostDetail() {
   const navigate = useNavigate();
   const [title, setTitle] = useState()
   const [body, setBody] = useState()
   
   const [name, setName] = useState()
   const [phone, setPhone] = useState()
   const [email, setEmail] = useState()
   const [website, setWebsite] = useState()

   const {postsId, userId} = useParams()

   const getPostAndUser = ( ) => {
      axios.get(`${API_BASE_URL}/posts/${postsId}`)
      .then((postRes) => {
         // setPost(postRes.data)
         const { title, body} = postRes.data;
         setTitle(title)
         setBody(body)
         axios.get(`${API_BASE_URL}/users/${userId}`)
         .then((userRes) => {
            const {name, email, phone, website} = userRes.data;
            setName(name)
            setEmail(email)
            setPhone(phone)
            setWebsite(website)
         })
         .catch((err) => {
            console.log(err);
         });
      })
      .catch((err) => {
         console.log(err);
      });
   }

   useEffect(() => {
      getPostAndUser();
   }, []);


   return (
      <div className='container'>
         <div className="row mt-3">
            <div className="col-12">
               <h3 className='text-center text-uppercase pt-14'>Post detail</h3>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-md-9 col-lg-9 col-sm-12">
               <div className="card mb-3">
                  <img className='card-img-top card-img-height' src="https://source.unsplash.com/random/400*400/?city,night" alt="" />
                  <div className="card-body">
                     <h5 className='caard-title'>{title}</h5>
                     <p className='card-text'>{body} </p>
                     <p className='card-text'><small className='text-muted'>Last update 3 mins ago</small></p>
                  </div>
               </div>
            </div>
            
            <div className="col-md-3 col-lg-3 col-sm-12">
               <div className="card">
                  <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                     <div className="card-body">
                        <h5 className="card-title">User Information</h5>
                        <p className="card-text">{name}</p>
                     </div>
                        <ul className="list-group list-group-flush">
                           <li className="list-group-item">
                              <a href={`mailto:${email}`}>{email}</a>
                           </li>
                           <li className="list-group-item">
                              <a href={`tel:${phone}`}>{phone}</a>
                           </li>
                           <li className="list-group-item">
                              <a target="_blank" href={`www.${website}`}>Visit our website</a>
                           </li>
                           <li className="list-group-item">
                              <div className='d-block'>
                                 <button onClick={() => {navigate(-1 )}} className='btn btn-primary w-100 text-uppercase'>Back</button>
                              </div>
                           </li>
                        </ul>
                     </div>
               </div>
            </div>
         </div>
   )
}

export default PostDetail
