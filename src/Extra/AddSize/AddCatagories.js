import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddSize = () => {
    const addCatagory =useRef()
    const navigate= useNavigate()
    const submitHandleCatagory= e=>{
        e.preventDefault();
        const getCatagory = addCatagory.current.value;
        const totalAdd = {
          getCatagory
        };
        console.log(totalAdd);
        fetch("https://service-yvt2.onrender.com/catagory", {
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
                title: "Catagory Added Successfully !!",
                showConfirmButton: false,
                timer: 1500,
              });
              e.target.reset();
              navigate("/sidebar/add-product")
            }
          });
    }
    return (
        <div>
            <marquee><h1>Add Your Catagory Here</h1></marquee>
            <form onSubmit={submitHandleCatagory}>
            <div className="title">
                      <h6>Catagories:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addCatagory}
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
        </div>
    );
};

export default AddSize;