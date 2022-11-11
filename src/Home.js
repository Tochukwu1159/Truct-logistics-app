import "./home.css";
import Header from "./components/includes/Header";
import React from "react";
import Footer from "./components/includes/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid bg">
        <div className="row">
          <div className="col-sm-6 text-center chi-col-r">
            <p className="intro">Truck logistics with safe delivery</p>
            <p className="homedesc">
              We have reliable experienced truck driver that ensure your cargo
              arrives at its destination fast and safely.
            </p>
            <a href="/login" className="nbtn btn btn-light truck-btn">
                Get Started <i className="fa fa-truck"></i>
            </a>
          </div>
          <div className="col-sm-6 ">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel crossfade homeslider"
              data-mdb-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/03/09/19/24/transport-4916922_960_720.jpg"
                    className="d-block w-100 "
                    alt="Wild Landscape"
                    height="640px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/01/03/03/42/truck-3910170_960_720.jpg"
                    className="d-block w-100"
                    alt="Camera"
                    height="640px"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/05/14/20/54/truck-3401529_960_720.jpg"
                    className="d-block w-100"
                    alt="Exotic Fruits"
                    height="640px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="illus">
        <div className="row">
          <div className="col-sm-4 text-center spacer">
            <img
              src="https://res.cloudinary.com/ckgraphics/image/upload/v1640793700/undraw_towing_6yy4_cob24j.png"
              height="200px"
              alt="icon"
            />
            <p className="ill-title">Request a Truck</p>
            <p className="ill-p">Truck arrives in few minutes.</p>
          </div>
          <div className="col-sm-4 text-center spacer">
            <img
              src="https://res.cloudinary.com/ckgraphics/image/upload/v1640793134/undraw_Mobile_pay_re_sjb8_djcxrc.png"
              height="200px"
              alt="icon"
            />
            <p className="ill-title">Affordable</p>
            <p className="ill-p">Get the best deals for logistics fare</p>
          </div>
          <div className="col-sm-4 text-center spacer">
            <img
              src="https://res.cloudinary.com/ckgraphics/image/upload/v1640793771/undraw_Mobile_testing_re_w7yb_wmbxgb.png"
              height="200px"
              alt="icon"
            />
            <p className="ill-title">Easy to use</p>
            <p className="ill-p">Deliver your goods safe and fast</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
