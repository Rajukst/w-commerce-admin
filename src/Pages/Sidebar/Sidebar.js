import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./SideBar.css"
import { Col, Container, Row } from 'react-bootstrap';
const Sidebar = () => {

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
                 <Link to="add-product" className="myLink"><h6>Add Product</h6></Link>
                 <Link to="color" className="myLink"><h6>Add Color</h6></Link>
                 <Link to="add-blog" className="myLink"><h6>Add Blog</h6></Link>
                 <Link to="catagory" className="myLink"><h6>Catagories</h6></Link>
                 <Link to="size" className="myLink"><h6>Sizes</h6></Link>
                 {/* <button onClick={logOut} className="LogOutButton">Log Out</button> */}
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