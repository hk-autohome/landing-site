import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import Footer from "./components/Footer.js";
import "./assets/Home.css";
import AutoHomeNavbar from "./components/Navbar.tsx";
import {Android, GitHub, Instagram, Power, Security, ToggleOff, Twitter} from "@mui/icons-material";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  return (
    <>
      <AutoHomeNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img alt="..." className="path" src={"autohome/img/blob.png"} />
          <img alt="..." className="path2" src={"autohome/img/path2.png"} />
          <img alt="..." className="shapes triangle" src={"autohome/img/triunghiuri.png"} />
          <img alt="..." className="shapes wave" src={"autohome/img/waves.png"} />
          <img alt="..." className="shapes squares" src={"autohome/img/patrat.png"} />
          <img alt="..." className="shapes circle" src={"autohome/img/cercuri.png"} />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  AutoHome <br />
                  <span className="text-white">Smart Switchboard Box</span>
                </h1>
                <p className="text-white mb-3">
                  AutoHome lets you control your home appliances effortlessly using only an Android app. In case you don’t want to use the app, your original switchboard will continue to work as usual, providing full control manually for complete peace of mind.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Starting at $49.99</p>
                  <Button className="btn-link" color="success" href="#product-features" size="sm">
                    <i className="tim-icons icon-minimal-right" /> Learn More
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button className="btn-icon btn-simple btn-round btn-neutral d-inline-flex align-items-center justify-content-center" color="default" href="#">
                      <Twitter />
                    </Button>
                    <Button className="btn-icon btn-simple btn-round btn-neutral d-inline-flex align-items-center justify-content-center" color="default" href="#">
                      <Instagram/>
                    </Button>
                    <Button className="btn-icon btn-simple btn-round btn-neutral d-inline-flex align-items-center justify-content-center" color="default" href="#">
                      <GitHub/>
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img alt="AutoHome Smart Switchboard" className="img-fluid" src={"https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-wireless-smart-home-automation-cross-section-with-climate-security-camera-tv-png-image_5860508.png"} />
              </Col>
            </Row>
          </div>
        </div>

        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-between">
              <Col className="mt-lg-5" md="5">
                <Row>
                  <Col className="px-2 py-2" lg="6" sm="12">
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <Android sx={{ color: "white", scale: 1.5 }}/>
                            </div>
                          </Col>
                          <Col md="8" xs="7">
                            <div className="numbers">
                              <CardTitle tag="p">Android App Control</CardTitle>
                              <p className="card-category">Easily Operate via App</p>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-2 py-2" lg="6" sm="12">
                    <Card className="card-stats upper bg-default">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <ToggleOff sx={{ color: "white", scale: 1.5 }}/>
                            </div>
                          </Col>
                          <Col md="8" xs="7">
                            <div className="numbers">
                              <CardTitle tag="p">Backup Manual Switch</CardTitle>
                              <p className="card-category">Original Switchboard Still Works</p>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col className="px-2 py-2" lg="6" sm="12">
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <Power sx={{ color: "white", scale: 1.5 }}/>
                            </div>
                          </Col>
                          <Col md="8" xs="7">
                            <div className="numbers">
                              <CardTitle tag="p">Plug & play</CardTitle>
                              <p className="card-category">Easy installation</p>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="px-2 py-2" lg="6" sm="12">
                    <Card className="card-stats">
                      <CardBody>
                        <Row>
                          <Col md="4" xs="5">
                            <div className="icon-big text-center icon-warning">
                              <Security sx={{ color: "white", scale: 1.5 }}/>
                            </div>
                          </Col>
                          <Col md="8" xs="7" style={{ paddingLeft: 0 }}>
                            <div className="numbers">
                              <CardTitle tag="p">Encrypted Security</CardTitle>
                              <p className="card-category">Secure Connectivity</p>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <h1>Why AutoHome?</h1>
                  <p>
                    AutoHome provides smart automation for your home or office. Gain full control over lights and appliances using our exclusive Android app.
                  </p>
                  <br />
                  <p>
                    And if you prefer not to use the app, no problem—your existing switchboard will continue to work manually, giving you flexibility and peace of mind.
                  </p>
                  <br />
                  <a className="font-weight-bold text-info mt-5" href="#features">
                    Discover More{" "}
                    <i className="tim-icons icon-minimal-right text-info" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Key Features of AutoHome</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-bulb-63" />
                      </div>
                      <h4 className="info-title">Energy Saving</h4>
                      <hr className="line-primary" />
                      <p>AutoHome helps reduce power consumption with feature to control the appliance from anywhere.</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-wifi" />
                      </div>
                      <h4 className="info-title">App Control</h4>
                      <hr className="line-warning" />
                      <p>Easily control all your connected devices using the Android app, anywhere, anytime.</p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-lock-circle" />
                      </div>
                      <h4 className="info-title">Backup Manual Control</h4>
                      <hr className="line-success" />
                      <p>AutoHome allows you to continue using your manual switchboard if needed, ensuring reliability.</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
