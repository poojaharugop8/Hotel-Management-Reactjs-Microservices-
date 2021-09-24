import React from "react";
import { Carousel, Card } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <Carousel fade interval={1000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Bkg.jpg"
            alt="First slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="bkg2.jpeg"
            alt="Second slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="bkg3.jpeg"
            alt="Third slide"
            width="1240"
            height="600"
          />
        </Carousel.Item>
      </Carousel>
      <br />
      <div>
        <h1 style={{ textAlign: "center", fontFamily: "-moz-initial" }}>
          <b>Services</b>
        </h1>
        <br />
      </div>

      <div className="container" style={{ fontFamily: "-moz-initial" }}>
        <div className="row">
          <div className="col-sm-4">
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <div style={{ margin: "10px" }}>
                <img
                  src="freecocktail.jpg"
                  width="50px"
                  height="50px"
                  alt="temp"
                />
              </div>
              <Card.Body>
                <Card.Title style={{ fontSize: "50px" }}>
                  Free Cocktail
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <div>
                <img src="hiking.jpg" width="70px" height="70px" alt="temp" />
              </div>
              <Card.Body>
                <Card.Title>Endless Hiking</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-4">
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <div style={{ marginTop: "20px" }}>
                <img src="bus.png" width="50px" height="50px" alt="temp" />
              </div>
              <Card.Body>
                <Card.Title>Free Shuttle</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
