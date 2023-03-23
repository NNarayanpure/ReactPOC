import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import Grid from "@mui/material/Grid";
import { Header } from "./Header";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <section style={{ backgroundColor: "#eee" }}>
        <Grid>
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4"></MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol lg="4">
                <MDBCard className="mb-4">
                  <MDBCardBody className="text-center">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle"
                      style={{ width: "150px" }}
                      fluid
                    />
                    <p className="text-muted mb-1">Nikhil Narayanpure</p>
                    <p className="text-muted mb-4">FullStack Developer</p>
                    <div className="d-flex justify-content-center mb-2">
                      <MDBBtn>Follow</MDBBtn>
                      <MDBBtn outline className="ms-1">
                        Message
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4 mb-lg-0">
                  <MDBCardBody className="p-0"></MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="8">
                <MDBCard className="mb-4">
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>NewVision Softcom pvt ltd.</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          .Netcore, React, MS-Azure
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />

                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted"></MDBCardText>
                    </MDBCol>

                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Phone</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          (097) 234-5678
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Mobile</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          (098) 765-4321
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Address</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBCardText className="text-muted">
                          Magarpatta Pune, Maharashtra, India
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>

                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                            Assigment
                          </span>{" "}
                          Project Status
                        </MDBCardText>
                        <MDBCardText
                          className="mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Web Design
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={80}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Website Markup
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={72}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          One Page
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={89}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Mobile Template
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={55}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Backend API
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={66}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="6">
                    <MDBCard className="mb-4 mb-md-0">
                      <MDBCardBody>
                        <MDBCardText className="mb-4">
                          <span className="text-primary font-italic me-1">
                            assigment
                          </span>{" "}
                          Project Status
                        </MDBCardText>
                        <MDBCardText
                          className="mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Web Design
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={80}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Website Markup
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={72}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          One Page
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={89}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Mobile Template
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={55}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>

                        <MDBCardText
                          className="mt-4 mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          Backend API
                        </MDBCardText>
                        <MDBProgress className="rounded">
                          <MDBProgressBar
                            width={66}
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Grid>
      </section>
    </>
  );
}
