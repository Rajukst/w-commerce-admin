import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./TopSummary.css"
import { useState,useEffect } from 'react';
const TopSummary = () => {
  // total number of orders
  const [order, setOrder]= useState([])
console.log(order?.cartItems)
  useEffect(() => {
      fetch(`https://service-yvt2.onrender.com/orders`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }, []);
    return (
        <Container>
        <Row>
          <Col>
          <div className="mainHead">
            <div className="bodys">
                <div className="icons">
                <i className="fa-brands fa-first-order fa-3x"></i>
                </div>
                <div className="texts">
                    <h5>{order.length}</h5>
                    <h6>Orders</h6>
                </div>
            </div>
          </div>
          </Col>
          <Col>
          <div className="mainHeadTwo">
            <div className="bodys">
                <div className="icons">
                 <i className="fa-regular fa-file-lines fa-3x"></i>
                </div>
                <div className="texts">
                    <h5>0 </h5>
                    <h6>Invoice</h6>
                </div>
            </div>
          </div>
          </Col>
          <Col>
          <div className="mainHeadThree">
            <div className="bodys">
                <div className="icons">
                <i class="fa-solid fa-sack-dollar fa-3x"></i>
                </div>
                <div className="texts">
                    {
                       order?.map?.cartItems?.reduce((x, pro) => x + pro?.salePrice, 0) 
                        
                        }
                    <h6>Sales</h6>
                </div>
            </div>
          </div>
          </Col>
          <Col>
          <div className="mainHeadFour">
            <div className="bodys">
                <div className="icons">
                <i className="fa-solid fa-user fa-3x"></i>
                </div>
                <div className="texts">
                    <h5>0 </h5>
                    <h6>Visitor</h6>
                </div>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    );
};

export default TopSummary;