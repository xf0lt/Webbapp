import React, { useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config/constant';

function Signup() {

   // const  navigate = useNavigate()
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");

   function alertFunction(message, type) {
      var wrapper = document.createElement('div')
      wrapper.innerHTML = '<div class="alert alert-success alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
      var alertPlaceholder = document.getElementById("alertMsg")
      alertPlaceholder.append(wrapper)
   }

   const signup = (event) => {
      event.preventDefault();
      const config = {
         headers: {
            'Content-Type': 'application/json'
         }
      }
      // debugger;
      const reqData = {
         name: fname + ' ' + lname,
         email: email,
         phone: phone,
         password: password 
      }

      // debugger;
      //? post sign up user
      axios.post(`${API_BASE_URL}/users`, reqData, config)
         .then((response) => {
            alertFunction('Registration Successfully, please login!', 'Success')
            setFname("");
            setLname("");
            setPhone("");
            setEmail("");
            setPassword("")
         })
         .catch((err) => {
            alertFunction('Some error occured', 'danger')
            console.log(err)
         });
      }

   return (
      <div className="container">
      <h3 className="text-center text-uppercase pt-2">Create an account</h3>
      <div id="alertMsg"></div>
      <div className="mx-auto contact-form-container text-muted shadow-sm rounded p-3 lh-2">
      <form onSubmit={(ev) => signup(ev)}>
            <div className="mb-3">
               <label htmlFor="Firstname" className="form-label">Firstname</label>
               <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" className="form-control" id="Firstname" required />
            </div>

            <div className="mb-3">
               <label htmlFor="Lastname" className="form-label">Lastname</label>
               <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" className="form-control" id="Lastname" required />
            </div>

            <div className="mb-3">
               <label htmlFor="phone" className="form-label">Contact No.</label>
               <input value={phone} onChange={(e) => setPhone(e.target.value)}  type="text" className="form-control" id="phone"  />
            </div>

            <div className="mb-3">
               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
               <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" className="form-control" id="email" required />
            </div>

            <div className="mb-3">
               <label htmlFor="password" className="form-label">Password</label>
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete='on' className="form-control" id="password" required />
            </div>

            <div className="d-grid">
               <button type="submit" className="btn btn-primary">Signup</button>
            </div>
            
         </form>
      </div>
      </div>
   )
}

export default Signup