import React, { useEffect, useRef, useState } from "react";
import "./AddProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate= useNavigate()
  const [catagories, setCatagories]= useState([])
  const [allSize, setAllSize]= useState([]);
  const [color, setColor]= useState([])
  const addTitle = useRef();
  const addSlug = useRef();
  const addShortDes = useRef();
  const addEditor = useRef();
  const addSKU = useRef();
  const addBuyPrice = useRef();
  const addRegularPrice = useRef();
  const addSalePrice = useRef();
  const addDiscountFrom = useRef();
  const addDiscountTo = useRef();
  const addStatus = useRef();
  const addFinalCatagory = useRef();
  const addStock = useRef();
  const addImage = useRef();
  const addSize= useRef()
  const addColor= useRef()
  const addProductQty = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const title = addTitle.current.value;
    const slug = addSlug.current.value;
    const shortDes = addShortDes.current.value;
    const sku = addSKU.current.value;
    const buyPrice = addBuyPrice.current.value;
    const regularPrice = addRegularPrice.current.value;
    const salePrice = addSalePrice.current.value;
    const discountFrom = addDiscountFrom.current.value;
    const discountTo = addDiscountTo.current.value;
    const status = addStatus.current.value;
    const finalFatagory = addFinalCatagory.current.value;
    const stock = addStock.current.value;
    const image = addImage.current.value;
    const editor = addEditor.current.value;
    const selSize= addSize.current.value;
    const quantity = addProductQty.current.value;
    const color= addColor.current.value;
    const totalAdd = {
      color,
      quantity,
      selSize,
      title,
      slug,
      shortDes,
      sku,
      buyPrice,
      regularPrice,
      salePrice,
      discountFrom,
      discountTo,
      status,
      finalFatagory,
      stock,
      image,
      editor,
    };
    console.log(totalAdd);
    fetch("https://service-yvt2.onrender.com/add-product", {
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
            title: "Product Added Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
      navigate("/sidebar/products")
  };
  // showing available all Catagories 
  useEffect(()=>{
    fetch("https://service-yvt2.onrender.com/allCatagory")
    .then(res=>res.json())
    .then(data=>setCatagories(data))
  },[])
  // showing available all sizes
  useEffect(()=>{
    fetch("https://service-yvt2.onrender.com/getSize")
    .then(res=>res.json())
    .then(data=>setAllSize(data))
  },[])
  useEffect(()=>{
    fetch("https://service-yvt2.onrender.com/getColor")
    .then(res=>res.json())
    .then(data=>setColor(data))
  },[])
  return (
    <div>
      <div className="addProduct-image">
        <marquee>
          <h4 className="productNameInfo">Add Product Here</h4>
        </marquee>
        <form onSubmit={handleOnSubmit}>
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
                      <input
                        ref={addTitle}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Slug:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addSlug}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Short Description:</h6>
                    </div>
                    <div className="inputTitle">
                      <textarea
                        ref={addShortDes}
                        name=""
                        id=""
                        cols=""
                        rows=""
                        required
                      ></textarea>
                    </div>
                    <div className="title">
                      <h6>Description:</h6>
                    </div>
                    <div className="inputTitle">
                      <JoditEditor ref={addEditor} required />
                    </div>
                  </div>
                </div>
                {/*Priching Information */}
                <div className="rightSide"></div>
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Price Info:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>SKU:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addSKU}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Buying Price:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addBuyPrice}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Regular Price:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addRegularPrice}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Sale Price:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addSalePrice}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="title">
                      <h6>Discount From:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        className="productInput"
                        type="date"
                        name=""
                        id=""
                        ref={addDiscountFrom}
                      />
                    </div>
                    <div className="title">
                      <h6>Discount to:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        className="productInput"
                        type="date"
                        name=""
                        id=""
                        ref={addDiscountTo}
                      />
                    </div>
                  </div>
                </div>
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
                      <select ref={addStatus} name="cars" id="cars">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="rightSide"></div>
                {/* Catagory Relation */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Size Relation:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Select size:</h6>
                    </div>
                    {allSize.map((getAllSize)=>
                   <Container>
                    <Row>
                      <Col xs={12} md={6} lg={6}>
                      <div className="inputTitle">
                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="men"
                        value={getAllSize.inputName}
                        className="me-2"
                        ref={addSize}
                      />
                      <label htmlFor={getAllSize.inputName}>{getAllSize.inputName}</label>
                      <br />                  
                    </div>
                      </Col>
                    </Row>
                   </Container>
                    )}
                    
                  </div>
                </div>
                <div className="rightSide"></div>
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Catagory Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Select Catagory:</h6>
                    </div>
                    <div className="inputTitle">
                    <select ref={addFinalCatagory} name="stock" id="cars">
                      {catagories.map((gtCatagory)=> 
                      <option value={gtCatagory.getCatagory}>{gtCatagory.getCatagory}</option>
                      )}
                      </select>
                      <br />
                    </div>
                  </div>
                </div>
                <div className="rightSide"></div>
                {/* Manage Stock */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Stock Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Stock Status:</h6>
                    </div>
                    <div className="inputTitle">
                      <select ref={addStock} name="stock" id="cars">
                        <option value="inStock">In Stock</option>
                        <option value="outStock">Out Of Stock</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="rightSide"></div>
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Quantity Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Quantity:</h6>
                    </div>
                    <div className="inputTitle">
                    <input
                        className="productInput"
                        type="text"
                        name=""
                        id=""
                        ref={addProductQty}
                      />

                    </div>
                  </div>
                </div>
                <div className="rightSide"></div>
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Color:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Select Color:</h6>
                    </div>
                    <div className="inputTitle">
                    <select ref={addColor} name="stock" id="cars">
                      {color.map((gtColor)=> 
                      <option value={gtColor.color}>{gtColor.color}</option>
                      )}
                      </select>
                      <br />
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
                      <input
                        ref={addImage}
                        className="productInput"
                        name=""
                        id=""
                        required
                      />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <button type="submit" className="mb-5 shopBTN">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
