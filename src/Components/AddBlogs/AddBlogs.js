import React, { useRef } from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddBlogs = () => {
const addTitle= useRef()
const addShortDesOne= useRef()
const addShortDesTwo= useRef()
const addStatus= useRef()
const addStatusName= useRef()
const addImage= useRef()
const handleBlogSubmit= e=>{
        e.preventDefault();
        const title = addTitle.current.value;
        const shortDesOne = addShortDesOne.current.value;
        const shortDesTwo = addShortDesTwo.current.value;
        const status = addStatus.current.value;
        const statusName = addStatusName.current.value;
        const Image = addImage.current.value;
        const totalAdd = {
          title,
    shortDesOne,shortDesTwo, status, statusName, Image
        };
        console.log(totalAdd);
        fetch("https://service-yvt2.onrender.com/add-blog", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(totalAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Blog Added Successfully !!",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
            }
          });
    }
  
    return (
        <div className="addProduct-image">
        <h4 className='productNameInfo'>Add Product Here</h4>
        <form onSubmit={handleBlogSubmit}>
          <Container>
            <Row>
              <Col xs={12} md={6} lg={7}>
                {/* General Information */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">General Info:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Title:</h6>
                    </div>
                    <div className="inputTitle">
                      <input ref={addTitle} className="productInput" type="" name="" id="" required/>
                    </div>
                    <div className="title">
                      <h6>Short Description 1:</h6>
                    </div>
                    <div className="inputTitle">
                      <textarea ref={addShortDesOne}  name="" id="" cols="" rows=""required></textarea>
                    </div>
                    <div className="title">
                      <h6>Short Description 2:</h6>
                    </div>
                    <div className="inputTitle">
                      <textarea ref={addShortDesTwo}  name="" id="" cols="" rows=""required></textarea>
                    </div>
                  </div>
                </div>
                {/*Priching Information */}
                <div className="rightSide"></div>    
              </Col>
              <Col xs={12} md={6} lg={5}>
                {/* Additional Information */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Additional Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Status:</h6>
                    </div>
                    <div className="inputTitle">
                    <textarea ref={addStatus}  name="" id="" cols="" rows=""required></textarea>
                    </div>
                    <div className="title">
                      <h6>Status Name:</h6>
                    </div>
                    <div className="inputTitle">
                    <input ref={addStatusName} className="productInput" type="" name="" id="" required/>
                    </div>
                  </div>
                </div>
                <div className="rightSide"></div>
                {/* Image Upload */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Image Upload Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Upload Image URL:</h6>
                    </div>
                    <div className="inputTitle">
                      <input ref={addImage} className="productInput" name="" id="" required/>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <button type="submit" className="mb-5 shopBTN">Add Blog</button>
        </form>
      </div>
    );
};

export default AddBlogs;