import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddSize = () => {
    const addInputName= useRef();
    const navigate= useNavigate()
 const handleSubmitSize= e=>{
    e.preventDefault();
    const inputName = addInputName.current.value;
    const totalAdd = {
     inputName
    };
    console.log(totalAdd);
    fetch("https://service-yvt2.onrender.com/add-size", {
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
        <div>
          <marquee><h1>Add Your Size Here</h1></marquee>
            <form onSubmit={handleSubmitSize}>
            <div className="title">
                      <h6>Size Name:</h6>
                    </div>
                    <div className="inputTitle">
                      <input
                        ref={addInputName}
                        className="productInput"
                        type=""
                        name=""
                        id=""
                        required
                      />
                    </div>
                    <div className="submitInformation">
                        <button type='submit' className='shopBTN'>Submit</button>
                    </div>
            </form>
        </div>
    );
};

export default AddSize;