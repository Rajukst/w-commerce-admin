import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Pages/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import AddProduct from './Components/AddProduct/AddProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import AddBlogs from './Components/AddBlogs/AddBlogs';
import AddCatagories from "./Extra/AddSize/AddCatagories"
import AddSize from './Extra/AddSizes/AddSize';
import AddColor from './Components/AddColor/AddColor';
import Login from './Admin/AdminLogin/Login';
import Orders from './Components/Orders/Orders';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser, toggleLoading } from './Redux/AllFeatures/Auth/authSlice';
import { useEffect } from 'react';
import auth from './Firebase/firebase.config';
import { Toaster } from 'react-hot-toast';
import EditProducts from './Components/EditProducts/EditProducts';
function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      console.log(user.role);
     if(user){
      dispatch(setUser(user.email))
     }
     else{
      dispatch(toggleLoading())
     }
    })
  },[])


  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}> </Route>
      <Route path='/sidebar' element={<Sidebar/>}> 
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='add-product' element={<AddProduct/>}/>
      <Route path='products' element={<AllProducts/>}/>
      <Route path='products/:id' element={<EditProducts/>}/>
      <Route path='orders' element={<Orders/>}/>
      <Route path='color' element={<AddColor/>}/>
      <Route path='add-blog' element={<AddBlogs/>}/>
      <Route path='catagory' element={<AddCatagories/>}/>
      <Route path='size' element={<AddSize/>}/>
      </Route>

     </Routes>
     <Toaster
  position="top-right"
  reverseOrder={true}
/>
     </BrowserRouter>
    </div>
  );
}

export default App;


/*


*/
