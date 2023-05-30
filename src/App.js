import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Pages/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import AddProduct from './Components/AddProduct/AddProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import AddBlogs from './Components/AddBlogs/AddBlogs';
import AddCatagories from "./Extra/AddSize/AddCatagories"
import AddSize from './Extra/AddSizes/AddSize';
import AddColor from './Components/EditProduct/AddColor';
import AdminLogin from './Admin/AdminLogin/AdminLogin';
import Orders from './Components/Orders/Orders';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AdminLogin/>}> </Route>
      <Route path='/sidebar' element={<Sidebar/>}> 
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='add-product' element={<AddProduct/>}/>
      <Route path='products' element={<AllProducts/>}/>
      <Route path='orders' element={<Orders/>}/>
      <Route path='color' element={<AddColor/>}/>
      <Route path='add-blog' element={<AddBlogs/>}/>
      <Route path='catagory' element={<AddCatagories/>}/>
      <Route path='size' element={<AddSize/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
