import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <>
      {/* <!-- Preloader --> */}

      {/* ------------------------------------------------------------------------------------------ */}
      {/* <!-- ##### Header Area Start ##### --> */}
      <header className="header-area">
        {/* <!-- Top Header Area --> */}
        <div className="top-header-area">
          <div className="h-100 d-md-flex justify-content-between align-items-center">
            <div className="email-address">
              <a href="mailto:info@srenterprise.in">info@srenterprise.in</a>
            </div>
            <div className="phone-number d-flex">
              <div className="icon">
                <img src="img/icons/phone-call.png" alt="" />
              </div>
              <div className="number">
                <a href="tel:+7992300383">+91 7992300383</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main Header Area --> */}
        <div className="main-header-area" id="stickyHeader">
          <div className="classy-nav-container breakpoint-off">
            {/* <!-- Classy Menu --> */}
            <nav
              className="classy-navbar justify-content-between"
              id="southNav"
            >
              {/* <!-- Logo --> */}
              <a className="nav-brand" href="index.html">
                <img src="img/core-img/logo.png" alt="SR Enterprise" />
              </a>

              {/* <!-- Navbar Toggler --> */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>

              {/* <!-- Menu --> */}
              <div className="classy-menu">
                {/* <!-- close btn --> */}
                <div className="classycloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span>
                    <span className="bottom"></span>
                  </div>
                </div>

                {/* <!-- Nav Start --> */}
                <div className="classynav">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="about-us.html">About SR Enterprise</a>
                        </li>
                        <li>
                          <a href="listings.html">Property Listings</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="listings.html">Properties</a>
                    </li>
                    <li>
                      <a href="blog.html">Real Estate Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>

                  {/* <!-- Search Form --> */}
                  <div className="south-search-form">
                    <form action="#" method="post">
                      <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Search property, city or location..."
                      />
                      <button type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>

                  {/* <!-- Search Button --> */}
                  <a href="#" className="searchbtn">
                    <i className="fa" aria-hidden="true"></i>
                  </a>
                </div>
                {/* <!-- Nav End --> */}
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* <!-- ##### Header Area End ##### --> */}
      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* ===== SWIPER SLIDER START ===== */}
      <div className="hero-slider">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="img/bg-img/hero1.jpg" alt="SR Enterprise Property" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="img/bg-img/hero2.jpg" alt="SR Enterprise Projects" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="img/bg-img/hero3.jpg" alt="SR Enterprise Homes" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* ===== SWIPER SLIDER END ===== */}

      {/* -------------------------------------------------------------------------------------------------- */}
      {/* <!-- ##### Advance Search Area Start ##### --> */}

      <div className="south-search-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="advanced-search-form"
                style={{ marginTop: "100px" }}
              >
                {/* Search Title */}
                <div className="search-title">
                  <p>Find Your Dream Property with SR Enterprise</p>
                </div>
                {/* Search Form */}
                <form action="#" method="post" id="advanceSearch">
                  <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <input
                          type="input"
                          className="form-control"
                          name="input"
                          placeholder="Keyword (House, Flat, Plot...)"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>All Cities</option>
                          <option>Kolkata</option>
                          <option>Delhi</option>
                          <option>Mumbai</option>
                          <option>Bangalore</option>
                          <option>Hyderabad</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Property Type</option>
                          <option>Apartment</option>
                          <option>Villa</option>
                          <option>House</option>
                          <option>Residential Plot</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control">
                          <option>Budget</option>
                          <option>₹50 Lakh - ₹60 Lakh</option>
                          <option>₹60 Lakh - ₹80 Lakh</option>
                          <option>₹80 Lakh - ₹1 Crore</option>
                          <option>₹1 Crore +</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 d-flex justify-content-between align-items-end">
                      {/* Submit */}
                      <div className="form-group mb-0">
                        <button type="submit" className="btn south-btn">
                          Search Property
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ##### Advance Search Area End ##### --> */}

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* ##### Featured Properties Area Start ##### */}
      <section className="featured-properties-area section-padding-100-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading wow fadeInUp">
                <h2>Featured Properties</h2>
                <p>
                  Premium homes and plots by SR Enterprise – Build for Tomorrow.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                <div className="property-thumb">
                  <img src="img/bg-img/feature1.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>₹58 Lakh</p>
                  </div>
                </div>

                <div className="property-content">
                  <h5>Modern Family Villa</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    New Town, Kolkata
                  </p>
                  <p>
                    Spacious modern villa with premium amenities and peaceful
                    surroundings. Perfect for families looking for a dream home.
                  </p>
                </div>
              </div>
            </div>

            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                <div className="property-thumb">
                  <img src="img/bg-img/feature2.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>₹65 Lakh</p>
                  </div>
                </div>

                <div className="property-content">
                  <h5>Luxury Apartment</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Salt Lake, Kolkata
                  </p>
                  <p>
                    Stylish apartment with modern interiors and great city
                    connectivity. Ideal for comfortable urban living.
                  </p>
                </div>
              </div>
            </div>

            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                <div className="property-thumb">
                  <img src="img/bg-img/feature3.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>₹72 Lakh</p>
                  </div>
                </div>

                <div className="property-content">
                  <h5>Premium Residential Plot</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Rajarhat, Kolkata
                  </p>
                  <p>
                    Excellent investment opportunity with fast developing
                    infrastructure and high future value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Featured Properties Area End ##### */}

      {/* -------------------------------------------------------------------------------------- */}
      {/* ##### Call To Action Area Start ##### */}
      <section
        className="call-to-action-area bg-fixed bg-overlay-black"
        style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-12">
              <div className="cta-content text-center">
                <h2>Looking to buy your dream home?</h2>
                <h6>
                  SR Enterprise helps you find the perfect property with trusted
                  guidance and the best deals.
                </h6>
                <a href="#" className="btn south-btn mt-50">
                  Explore Properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Call To Action Area End ##### */}

      {/* ##### Footer Area Start ##### */}
      <footer
        className="footer-area section-padding-100-0 bg-img gradient-background-overlay"
        style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
      >
        <div className="main-footer-area">
          <div className="container">
            <div className="row">
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  <div className="widget-title">
                    <h6>About SR Enterprise</h6>
                  </div>

                  <img src="img/bg-img/footer.jpg" alt="" />

                  <div className="footer-logo my-4">
                    <img src="img/core-img/logo.png" alt="" />
                  </div>

                  <p>
                    SR Enterprise is a trusted real estate company dedicated to
                    helping people find their dream homes and smart property
                    investments. With quality projects and reliable service, we
                    proudly follow our vision – Build for Tomorrow.
                  </p>
                </div>
              </div>

              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  <div className="widget-title">
                    <h6>Office Hours</h6>
                  </div>

                  <div className="weekly-office-hours">
                    <ul>
                      <li className="d-flex justify-content-between">
                        <span>Monday - Saturday</span>{" "}
                        <span>09 AM - 07 PM</span>
                      </li>
                      <li className="d-flex justify-content-between">
                        <span>Sunday</span> <span>Closed</span>
                      </li>
                    </ul>
                  </div>

                  <div className="address">
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +91
                      7992300383
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      info@srenterprise.in
                    </h6>
                    <h6>
                      <img src="img/icons/location.png" alt="" /> Kolkata, West
                      Bengal, India
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copywrite Text */}
        <div className="copywrite-text d-flex align-items-center justify-content-center">
          <p>
            Copyright © {new Date().getFullYear()} SR Enterprise | Build for
            Tomorrow
          </p>
        </div>
      </footer>
      {/* ##### Footer Area End ##### */}
    </>
  );
}

export default App;
