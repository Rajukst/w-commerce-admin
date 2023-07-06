import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SellChart from '../SellChart/SellChart';
import BubbleChart from '../BubbleChart/BubbleChart';
import PieChart from '../PieChart/PieChart';

const ChartRenderAll = () => {
    return (
        <>
        <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
          <SellChart/>
          </Col>
          <Col xs={12} md={6} lg={6}>
          <PieChart/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
          <BubbleChart/>
          </Col>
        </Row>
      </Container>
        </>
    );
};

export default ChartRenderAll;