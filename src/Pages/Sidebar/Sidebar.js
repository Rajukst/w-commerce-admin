import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./SideBar.css"
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { logOut } from '../../Redux/AllFeatures/Auth/authSlice';
import { toast } from 'react-hot-toast';
const Sidebar = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const {email}= useSelector(state=>state.auth)
  const handleLogOut=()=>{
    signOut(auth)
    .then(()=>{
      dispatch(logOut())
    })
    toast.success("logout Success")
  }
    return (
       <>
       <Container fluid className='mt-3'>
        <Row>
            <Col xs={12} md={3} lg={3}>
            <div className="allCatagoriesss">
                <div className="listItemsss">
                 <h5 className="allCatagoris">Dashboard</h5>
                 <Link to="dashboard" className="myLink"><h6>Dashboard</h6></Link>
                 <Link to="products" className="myLink"><h6>Products</h6></Link>
                 <Link to="orders" className="myLink"><h6>Orders</h6></Link>
                 <Link to="add-product" className="myLink"><h6>Add Product</h6></Link>
                 <Link to="color" className="myLink"><h6>Add Color</h6></Link>
                 <Link to="add-blog" className="myLink"><h6>Add Blog</h6></Link>
                 <Link to="catagory" className="myLink"><h6>Catagories</h6></Link>
                 <Link to="size" className="myLink"><h6>Sizes</h6></Link>
          {email ? (
        <div>
            <button onClick={handleLogOut} variant="outline-info" className="ms-2 logOutss">
            LogOut
          </button>
        </div>
        ) : (
         navigate("/")
        )}
                </div>
            </div>
            </Col>
            <Col xs={12} md={9} lg={9}>
            <Outlet/>
            </Col>
        </Row>
       </Container>
       </>
    );
};

export default Sidebar;