import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import JoditEditor from "jodit-react";
const EditProducts = () => {
    const {id}= useParams()
    const [updateProduct,setUpdateProduct] = useState({})
    useEffect(()=>{
        const url = `https://ecocart.onrender.com/products/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUpdateProduct(data))
    },[])

    const updateTitle= e=>{
        const nextTitle = e.target.value;
        const updateTitle= {title:nextTitle,  color: updateProduct.color,quantity: updateProduct.quantity,selSize: updateProduct.selSize,
slug: updateProduct.slug,shortDes: updateProduct.shortDes, sku: updateProduct.sku,buyPrice: updateProduct.buyPrice, regularPrice: updateProduct.regularPrice, salePrice:updateProduct.salePrice, status: updateProduct.status,
finalFatagory: updateProduct.finalFatagory, stock:updateProduct.stock, image:updateProduct.image, editor:updateProduct.editor
         
        }
        setUpdateProduct(updateTitle)

    }
const updateSlug= e=>{
    const nextSlug = e.target.value;
    const updateSlug= {slug:nextSlug, 
        title: updateProduct.title, color: updateProduct.color,quantity: updateProduct.quantity,selSize: updateProduct.selSize,
       shortDes: updateProduct.shortDes, sku: updateProduct.sku,buyPrice: updateProduct.buyPrice, regularPrice: updateProduct.regularPrice, salePrice:updateProduct.salePrice, status: updateProduct.status,
        finalFatagory: updateProduct.finalFatagory, stock:updateProduct.stock, image:updateProduct.image, editor:updateProduct.editor
    };
    setUpdateProduct(updateSlug);
}
const updateShortDescription= e=>{
    const nextShortDes = e.target.value;
    const updateDescription = {shortDes:nextShortDes,
        title: updateProduct.title, color: updateProduct.color,quantity: updateProduct.quantity,selSize: updateProduct.selSize,
        slug: updateProduct.slug, sku: updateProduct.sku,buyPrice: updateProduct.buyPrice, regularPrice: updateProduct.regularPrice, salePrice:updateProduct.salePrice, status: updateProduct.status,
        finalFatagory: updateProduct.finalFatagory, stock:updateProduct.stock, image:updateProduct.image, editor:updateProduct.editor
    };
    setUpdateProduct(updateDescription);
}


    return (
        <div>
            <h1>This is Edit Products with ID: {updateProduct._id}</h1>
            <form>
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
                      onChange={updateTitle}
                        value={updateProduct?.title}
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
                        value={updateProduct?.slug}
                        onChange={updateSlug}
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
                        value={updateProduct?.shortDes}
                        onChange={updateShortDescription}
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
                      <JoditEditor 
                      value={updateProduct?.editor}
                      required />
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
                      {/* <select ref={addStatus} name="cars" id="cars">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select> */}
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
                    {/* <select ref={addFinalCatagory} name="stock" id="cars">
                      {catagories.map((gtCatagory)=> 
                      <option value={gtCatagory.getCatagory}>{gtCatagory.getCatagory}</option>
                      )}
                      </select> */}
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
                      {/* <select ref={addStock} name="stock" id="cars">
                        <option value="inStock">In Stock</option>
                        <option value="outStock">Out Of Stock</option>
                      </select> */}
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
                    {/* <select ref={addColor} name="stock" id="cars">
                      {color.map((gtColor)=> 
                      <option value={gtColor.color}>{gtColor.color}</option>
                      )}
                      </select> */}
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
    );
};

export default EditProducts;