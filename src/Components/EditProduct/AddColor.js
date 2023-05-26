import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddColor = () => {
    const addInputColor= useRef();
    const navigate= useNavigate()
 const handleSubmitColor= e=>{
    e.preventDefault();
    const color = addInputColor.current.value;
    const totalAdd = {
     color
    };
    console.log(totalAdd);
    fetch("https://service-yvt2.onrender.com/add-color", {
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
            title: "Size Added Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
          navigate("/sidebar/add-product")
        }
      });
    }
    return (
        <>
        <marquee><h1>Add Your Color Here</h1></marquee>
        <form onSubmit={handleSubmitColor}>
        <div className="title">
                  <h6>Color Name:</h6>
                </div>
                <div className="inputTitle">
                  <input
                    ref={addInputColor}
                    className="productInput"
                    type=""
                    name=""
                    id=""
                    required
                  />
                </div>
                <div className="submitInfo">
                    <button type='submit'>Submit</button>
                </div>
        </form>
        </>
    );
};

export default AddColor;