import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Col, Container, Row } from 'react-bootstrap';
import "./AdminLogin.css"
const AdminLogin = () => {
    const navigate= useNavigate()
const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/sidebar")
    console.log(e);

}
    return (
        <div className="login-div">
      {/* <img src={userPhoto} alt="userPhoto" className="userPhoto"/> */}
        <Container>
          <Row>
            <Col xs={12} md={5} lg={5}>
              <Col>
                <Player
                  autoplay
                  loop
                  src="https://assets7.lottiefiles.com/private_files/lf30_m6j5igxb.json"
                  style={{ height: "300px", width: "300px" }}
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
                <form onSubmit={handleOnSubmit}>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="mainInfo">
                  <h1 className="mt-3">Admin login </h1>
                    <h6 className="gnrlInfo">Login Information:</h6>
                    <div className="infoHead">
                      <div className="title">
                        <h6>Email:</h6>
                      </div>
                      <div className="inputTitle">
                        <input className="loginInfo"
                          type="email"
                        />
                      </div>
                      <div className="title">
                        <h6>Password:</h6>
                      </div>
                      <div className="inputTitle">
                        <input className="loginInfo"
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