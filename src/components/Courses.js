import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard";

const Courses = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Container className="text-center">
        <Row className="mt-3 mb-3 d-flex justify-content-center">
          {data.map((course) => {
            return (
              <Col
                className=" d-flex  justify-content-center h-25"
                key={course.id}
                xs={12}
                md={6}
                lg={4}
              >
                <MyCard course={course} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
