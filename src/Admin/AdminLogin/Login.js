import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Col, Container, Row } from 'react-bootstrap';
import "./AdminLogin.css"
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../Redux/AllFeatures/Auth/authSlice';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AdminLogin = () => {
    const navigate= useNavigate()
    const location= useLocation()
    const dispatch = useDispatch();
    const {isLoading, email, isError, error} = useSelector(state=>state.auth)
    const { register, handleSubmit } = useForm();

const handleOnSubmit = ({email, password}) => {
    dispatch(loginUser({email, password}))

}
useEffect(()=>{
  if(!isLoading && email){
    navigate("/sidebar");
  }
},[isLoading, email])
// error message showing UI
useEffect(()=>{
if(isError){
toast.error(error)
}
},[isError, error])
    return (
        <div className="login-div">
        <Container>
          <Row>
            <Col xs={12} md={5} lg={5}>
              <Col>
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/private_files/lf30_m6j5igxb.json"
                  style={{ height: "500px", width: "500px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </Col>
            </Col>
            <Col xs={12} md={7} lg={7}>
              <div className="login-continer">
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Login Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Email:</h6>
                    </div>
                    <div className="inputTitle">
                      <input className="loginInfo"
                        {...register("email", { required: true })}
                        type="email"
                      />
                    </div>
                    <div className="title">
                      <h6>Password:</h6>
                    </div>
                    <div className="inputTitle">
                      <input className="loginInfo"
                        {...register("password", { required: true })}
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                {/* errors will return when field validation fails  */}
                <div className="submitInfo">
                <input className="submitInf" type="submit" value="Login" />
                </div>
              </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default AdminLogin;