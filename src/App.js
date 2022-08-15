/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar';
import Home from './screens/Home';
import AllPosts from './screens/AllPosts'
import About from '../src/screens/About';
import Contact from './screens/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import PostDetail from './screens/PostDetail';
import CreatePost from './screens/CreatePost';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { useState, useEffect, createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialUserState, userReducer } from './reducers/userReducer';
import MyAllPosts from './screens/MyAllPosts';

export const UserContext = createContext();

function DynamicRoutes() {
   const navigate = useNavigate()
   const { state, dispatch } = useContext(UserContext);
   
   useEffect( () => {
      const token = localStorage.getItem('token')
      if(token) {
         const user = JSON.parse(localStorage.getItem('user'));
         const userState = {'token': token, 'user': user};
         const action = {type: 'LOGIN', payload: userState};
         dispatch(action);
         navigate('/posts');
      } else {
         navigate('/login');
      }
   }, []);

   return (
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/posts' element={<AllPosts />}></Route>
      <Route path='/myposts' element={<MyAllPosts />}></Route> 
      <Route path='/create' element={<CreatePost />}></Route>
      <Route path='/create/:postsId/:userId' element={<CreatePost />}></Route>
      <Route path='/posts/:postsId/:userId' element={<PostDetail />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
   </Routes>
   )
}

function App() {

   const [state, dispatch] = useReducer(userReducer, initialUserState)

   return (
      <UserContext.Provider value={{state: state, dispatch: dispatch}} >
   <Router>
      <div >
         <NavBar ></NavBar>
         <DynamicRoutes />
         <Footer />
      </div>
   </Router>
   </UserContext.Provider>
   );
}

export default App;
