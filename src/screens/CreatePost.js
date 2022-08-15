import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {API_BASE_URL} from '../config/constant'

function CreatePost() {

   const {postsId, userId} = useParams()

   const [title, setTitle] = useState()
   const [body, setBody] = useState()
   const [loader, setLoader] = useState(false)
   const [isEdit, setIsEdit] = useState(false)


   const populateDate = () => {
      // debugger;
      if (postsId){
         setIsEdit(true);
         setLoader()
         fetch(`${API_BASE_URL}/posts/${postsId}`)
         .then((response) => response.json())
         .then((json) => {
            // debugger;
            console.log(json)
            setTitle(json.title)
            setBody(json.body)
            setLoader(false)
         });
      }
   }


   const createPost = (event) => {

      setLoader(true)
      event.preventDefault();

      let methodType = 'POST';
      let url = 'posts';
      if(postsId){
         methodType = 'PUT';
         url = `posts/${postsId}`
      }
      let reqBody = JSON.stringify({
         title: title,
         body: body,
         userId: 1,
      });

      //? axios.post(url,reqdata).then().catch()
      fetch(`${API_BASE_URL}/${url}`, {
         method: `${methodType}`,
         body: reqBody, 
         headers: {
            'content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json()) 
         .then((json) => {
            setLoader(false)
            console.log(title);

            if(isEdit) {
               alertFunction('Post Edited Successfully!', 'success')
            } else {
               alertFunction('Post Create Successfully!', 'success')
            }
         }).catch((err) => {
            alertFunction('Some error ourred', 'danger')
            console.log(err);
         })
   }


   function alertFunction(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-success alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      var alertPlaceholder = document.getElementById("alertMsg")
      alertPlaceholder.append(wrapper)
   }

   useEffect(() => {
      populateDate();
   }, [])

   return (
      <div className="container">
         { isEdit ? <h3 className="text-center text-uppercase pt-4">Edit post</h3>
         : <h3 className="text-center text-uppercase pt-4">Create post</h3> }
         <div id="alertMsg"></div>
         {
            loader? <div className='col-12 text-center'>
                  <div className="spinner-border text-primary" role="status">
                     <span className="sr-only">Loading...</span>
                  </div>
               </div>
            
         : 
         <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
         <form onSubmit={(event) => {createPost(event)}}>
            <div className="mb-3">
               <label htmlFor="title" className="form-label">Post title</label>
               <input value={title} onChange={(e) => {setTitle(e.target.value)}} type="text" className="form-control" id="title" required />
            </div>
            <div className="mb-3">
               <label htmlFor="description" className="form-label">Post Description</label>
               <textarea value={body} onChange={(e) => {setBody(e.target.value)}} className='form-control' id='description' required></textarea>
            </div>
            <div className="d-grid">
               <button type="submit" className="btn btn-primary">
                  {isEdit ? 'Edit Post' : 'create post'}
               </button>
            </div>            
         </form>
         </div>
      }
      </div>
   )
}


export default CreatePost


