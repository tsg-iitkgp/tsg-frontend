import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Gallery.css";
import Layout from "../../components/Layouts/Layout";
import img1 from "./images/Picture1.png";
import img2 from "./images/Picture2.jpg";
import img3 from "./images/Picture3.jpg";
import img4 from "./images/Picture4.jpg";
import img5 from "./images/Picture5.jpg";
import img6 from "./images/Picture6.jpg";
import AppImage from "../../components/AppImage";

function Gallery() {
  return (
    <Layout>
      <div className="maindiv_gallery">
        <div>
          <h2
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "36px",
            }}
          >
            GALLERY
          </h2>
          <Container>
            <Row style={{ marginTop: "5%" }}>
              <Col className="main_col1" md={4}>
                <Row className="img-grid_row" xs={12}>
                  <Row className="row1">
                    <Col style={{ width: 350 }}>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img1} alt="..." className="myimg" />
                        <div className="layer">
                          <h3>Illumination</h3>
                        </div>
                      </div>
                    </Col>
                    <Col style={{ width: 350 }}>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img2} alt="..." className="myimg" />
                      </div>
                    </Col>

                    <Col>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img3} alt="..." className="myimg" />
                      </div>
                    </Col>
                    <Col style={{ width: 350 }}>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img4} alt="..." className="myimg" />
                      </div>
                    </Col>
                  </Row>
                  <Row className="row1">
                    <Col>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img5} alt="..." className="myimg" />
                      </div>
                    </Col>

                    <Col>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img6} alt="..." className="myimg" />
                      </div>
                    </Col>
                    <Col style={{ width: 350 }}>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img3} alt="..." className="myimg" />
                      </div>
                    </Col>
                    <Col>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img2} alt="..." className="myimg" />
                      </div>
                    </Col>
                  </Row>
                  <Row className="row1">
                    <Col>
                      <div
                        className="grid_imgs"
                        style={{ width: 350, height: 350 }}
                      >
                        <AppImage src={img1} alt="..." className="myimg" />
                      </div>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

export default Gallery;
