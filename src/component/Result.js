import React from "react";
import { Row, Col, Divider } from "antd";

const Result = ({ pics }) => {
  return (
    <div>
      <Row>
        {pics.map((pic) => (
          <Col xs={24} xl={8} key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.small}
              style={{borderRadius:'20px'}}
            ></img>
            <p>{pic.alt_description}</p>
            <Divider/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Result;
