/*page for clients to enter */ 

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container,Form, FormGroup, Input, Button, } from 'reactstrap';

const FormComponent = () => {

  const navigate = useNavigate();
    return (
      <div>
        <div className="spacer bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Take Our Assesment</h1>
                <h6 className="subtitle">
                  A healthier life starts here 
                </h6>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact1">
          <Container>
            <Row>
              <div className="spacer">
                <Row className="m-0">
                  <Col lg="8">
                    <div className="contact-box p-r-40">
                      <h4 className="title">Personal Information</h4>
                      <Form>
                        <Row>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="name" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="email" />
                            </FormGroup>
                          </Col>

                  

                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="height" />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="text" placeholder="weight" />
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="select">
                                <option value="">Sex</option>
                                <option value="option1">Male</option>
                                <option value="option2">Female</option>
                              </Input>
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="select">
                                <option value="">Fitness Level</option>
                                <option value="option1">Sedentary</option>
                                <option value="option2">Lightly active</option>
                                <option value="option3">Moderately active</option>
                                <option value="option4">Very active</option>
                                <option value="option5">Extra active</option>
                              </Input>
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="select">
                                <option value="">Diabetes Type</option>
                                <option value="option1">Type 1</option>
                                <option value="option2">Type 2</option>
                              </Input>
                            </FormGroup>
                          </Col>

                          <Col lg="6">
                            <FormGroup className="m-t-15">
                              <Input type="select">
                                <option value="">Dietary Restrictions</option>
                                <option value="option1">Vegetarian</option>
                                <option value="option2">Lactose Intolerant</option>
                                <option value="option3">Gluten Intolerance</option>
                                <option value="option4">Nut Allergy</option>
                              </Input>
                            </FormGroup>
                          </Col>
                       
                          
                         
                          <Col lg="12">

                            <Button
                             className="btn btn-success-gradiant btn-md btn-arrow m-t-20" data-toggle="collapse" onClick={() => navigate("/result")}>
                              <span>
                                {" "}
                                SUBMIT <i className="ti-arrow-right"></i>
                              </span>
                              
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Col>
                  
                  <Col lg="4">
                    <div className="detail-box p-40 bg-info">
                      <h2 className="text-white">How it Works</h2>
                      <p className="text-white m-t-30 op-8">
                        251 546 9442
                        <br /> info@wrappixel.com
                      </p>
                      <p className="text-white op-8">
                        601 Sherwood Ave.
                        <br /> San Bernandino, CA 92404
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </Container>
        </div>
        </div>
    );
};

export default FormComponent;