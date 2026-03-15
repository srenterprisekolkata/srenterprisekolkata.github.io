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
      <div id="preloader">
        <div className="south-load"></div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}
      {/* <!-- ##### Header Area Start ##### --> */}
      <header className="header-area">
        {/* <!-- Top Header Area --> */}
        <div className="top-header-area">
          <div className="h-100 d-md-flex justify-content-between align-items-center">
            <div className="email-address">
              <a href="mailto:contact@southtemplate.com">
                contact@southtemplate.com
              </a>
            </div>
            <div className="phone-number d-flex">
              <div className="icon">
                <img src="img/icons/phone-call.png" alt="" />
              </div>
              <div className="number">
                <a href="tel:+45 677 8993000 223">+45 677 8993000 223</a>
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
                <img src="img/core-img/logo.png" alt="" />
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
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about-us.html">About Us</a>
                        </li>
                        <li>
                          <a href="#">Listings</a>
                          <ul className="dropdown">
                            <li>
                              <a href="listings.html">Listings</a>
                            </li>
                            <li>
                              <a href="single-listings.html">Single Listings</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Blog</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-blog.html">Single Blog</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                        <li>
                          <a href="elements.html">Elements</a>
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
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="#">Mega Menu</a>
                      <div className="megamenu">
                        <ul className="single-mega cn-col-4">
                          <li className="title">Headline 1</li>
                          <li>
                            <a href="#">Mega Menu Item 1</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 2</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 3</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 4</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 5</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Headline 2</li>
                          <li>
                            <a href="#">Mega Menu Item 1</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 2</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 3</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 4</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 5</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Headline 3</li>
                          <li>
                            <a href="#">Mega Menu Item 1</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 2</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 3</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 4</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 5</a>
                          </li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Headline 4</li>
                          <li>
                            <a href="#">Mega Menu Item 1</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 2</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 3</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 4</a>
                          </li>
                          <li>
                            <a href="#">Mega Menu Item 5</a>
                          </li>
                        </ul>
                      </div>
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
                        placeholder="Search Anything ..."
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
            <img src="img/bg-img/hero1.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="img/bg-img/hero2.jpg" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="img/bg-img/hero3.jpg" alt="" />
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
                  <p>Search for your home</p>
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
                          placeholder="Keyword"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control" id="cities">
                          <option>All Cities</option>
                          <option>Riga</option>
                          <option>Melbourne</option>
                          <option>Vienna</option>
                          <option>Vancouver</option>
                          <option>Toronto</option>
                          <option>Calgary</option>
                          <option>Adelaide</option>
                          <option>Perth</option>
                          <option>Auckland</option>
                          <option>Helsinki</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control" id="catagories">
                          <option>All Catagories</option>
                          <option>Apartment</option>
                          <option>Bar</option>
                          <option>Farm</option>
                          <option>House</option>
                          <option>Store</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3">
                      <div className="form-group">
                        <select className="form-control" id="offers">
                          <option>All Offers</option>
                          <option>100% OFF</option>
                          <option>75% OFF</option>
                          <option>50% OFF</option>
                          <option>25% OFF</option>
                          <option>10% OFF</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-3">
                      <div className="form-group">
                        <select className="form-control" id="listings">
                          <option>All Listings</option>
                          <option>Listings 1</option>
                          <option>Listings 2</option>
                          <option>Listings 3</option>
                          <option>Listings 4</option>
                          <option>Listings 5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                      <div className="form-group">
                        <select className="form-control" id="bedrooms">
                          <option>Bedrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 col-xl-2">
                      <div className="form-group">
                        <select className="form-control" id="bathrooms">
                          <option>Bathrooms</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5+</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-12 col-xl-5 d-flex">
                      {/* Space Range */}
                      <div className="slider-range">
                        <div
                          data-min={120}
                          data-max={820}
                          data-unit=" sq. ft"
                          className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          data-value-min={120}
                          data-value-max={820}
                        >
                          <div className="ui-slider-range ui-widget-header ui-corner-all" />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                        </div>
                        <div className="range">120 sq. ft - 820 sq. ft</div>
                      </div>
                      {/* Distance Range */}
                      <div className="slider-range">
                        <div
                          data-min={10}
                          data-max={1300}
                          data-unit=" mil"
                          className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          data-value-min={10}
                          data-value-max={1300}
                        >
                          <div className="ui-slider-range ui-widget-header ui-corner-all" />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                          <span
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            tabIndex={0}
                          />
                        </div>
                        <div className="range">10 mil - 1300 mil</div>
                      </div>
                    </div>
                    <div className="col-12 search-form-second-steps">
                      <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                          <div className="form-group">
                            <select className="form-control" id="types">
                              <option>All Types</option>
                              <option>
                                Apartment <span>(30)</span>
                              </option>
                              <option>
                                Land <span>(69)</span>
                              </option>
                              <option>
                                Villas <span>(103)</span>
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                          <div className="form-group">
                            <select className="form-control" id="catagories2">
                              <option>All Catagories</option>
                              <option>Apartment</option>
                              <option>Bar</option>
                              <option>Farm</option>
                              <option>House</option>
                              <option>Store</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                          <div className="form-group">
                            <select className="form-control" id="Actions">
                              <option>All Actions</option>
                              <option>Sales</option>
                              <option>Booking</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                          <div className="form-group">
                            <select className="form-control" id="city2">
                              <option>All City</option>
                              <option>City 1</option>
                              <option>City 2</option>
                              <option>City 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <select className="form-control" id="Actions3">
                              <option>All Actions</option>
                              <option>Sales</option>
                              <option>Booking</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <select className="form-control" id="city3">
                              <option>All City</option>
                              <option>City 1</option>
                              <option>City 2</option>
                              <option>City 3</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="form-group">
                            <select className="form-control" id="city5">
                              <option>All City</option>
                              <option>City 1</option>
                              <option>City 2</option>
                              <option>City 3</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-end">
                      {/* More Filter */}
                      <div className="more-filter">
                        <a href="#" id="moreFilter">
                          + More filters
                        </a>
                      </div>
                      {/* Submit */}
                      <div className="form-group mb-0">
                        <button type="submit" className="btn south-btn">
                          Search
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
                  Suspendisse dictum enim sit amet libero malesuada feugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="100ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature1.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Villa in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="200ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature2.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Town House in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="300ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature3.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Town House in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="400ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature4.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Villa in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="500ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature5.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Town House in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="600ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature6.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Town House in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
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
                <h2 className="wow fadeInUp" data-wow-delay="300ms">
                  Are you looking for a place to rent?
                </h2>
                <h6 className="wow fadeInUp" data-wow-delay="400ms">
                  Suspendisse dictum enim sit amet libero malesuada feugiat.
                </h6>
                <a
                  href="#"
                  className="btn south-btn mt-50 wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Call To Action Area End ##### */}
      {/* ##### Testimonials Area Start ##### */}
      <section className="south-testimonials-area section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-heading wow fadeInUp"
                data-wow-delay="250ms"
              >
                <h2>Client testimonials</h2>
                <p>
                  Suspendisse dictum enim sit amet libero malesuada feugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="testimonials-slides owl-carousel wow fadeInUp"
                data-wow-delay="500ms"
              >
                {/* Single Testimonial Slide */}
                <div className="single-testimonial-slide text-center">
                  <h5>Perfect Home for me</h5>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit amet tellus blandit. Etiam nec odio
                    vestibulum est mattis effic iturut magna. Pellentesque sit
                    am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                    odio vestibulum est mat tis effic iturut magna.
                  </p>
                  <div className="testimonial-author-info">
                    <img src="img/bg-img/feature6.jpg" alt="" />
                    <p>
                      Daiane Smith, <span>Customer</span>
                    </p>
                  </div>
                </div>
                {/* Single Testimonial Slide */}
                <div className="single-testimonial-slide text-center">
                  <h5>Perfect Home for me</h5>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit amet tellus blandit. Etiam nec odio
                    vestibulum est mattis effic iturut magna. Pellentesque sit
                    am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                    odio vestibulum est mat tis effic iturut magna.
                  </p>
                  <div className="testimonial-author-info">
                    <img src="img/bg-img/feature6.jpg" alt="" />
                    <p>
                      Daiane Smith, <span>Customer</span>
                    </p>
                  </div>
                </div>
                {/* Single Testimonial Slide */}
                <div className="single-testimonial-slide text-center">
                  <h5>Perfect Home for me</h5>
                  <p>
                    Etiam nec odio vestibulum est mattis effic iturut magna.
                    Pellentesque sit amet tellus blandit. Etiam nec odio
                    vestibulum est mattis effic iturut magna. Pellentesque sit
                    am et tellus blandit. Etiam nec odio vestibul. Etiam nec
                    odio vestibulum est mat tis effic iturut magna.
                  </p>
                  <div className="testimonial-author-info">
                    <img src="img/bg-img/feature6.jpg" alt="" />
                    <p>
                      Daiane Smith, <span>Customer</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Testimonials Area End ##### */}
      {/* ##### Editor Area Start ##### */}
      <section className="south-editor-area d-flex align-items-center">
        {/* Editor Content */}
        <div className="editor-content-area">
          {/* Section Heading */}
          <div className="section-heading wow fadeInUp" data-wow-delay="250ms">
            <img src="img/icons/prize.png" alt="" />
            <h2>jeremy Scott</h2>
            <p>Realtor</p>
          </div>
          <p className="wow fadeInUp" data-wow-delay="500ms">
            Etiam nec odio vestibulum est mattis effic iturut magna.
            Pellentesque sit amet tellus blandit. Etiam nec odiomattis effic
            iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio
            vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna.
            Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu
            pharetra arcu varius ac. Etiam cursus turpis lectus, id iaculis
            risus tempor id. Phasellus fringilla nisl sed sem scelerisque, eget
            aliquam magna vehicula.
          </p>
          <div className="address wow fadeInUp" data-wow-delay="750ms">
            <h6>
              <img src="img/icons/phone-call.png" alt="" /> +45 677 8993000 223
            </h6>
            <h6>
              <img src="img/icons/envelope.png" alt="" /> office@template.com
            </h6>
          </div>
          <div className="signature mt-50 wow fadeInUp" data-wow-delay="1000ms">
            <img src="img/core-img/signature.png" alt="" />
          </div>
        </div>
        {/* Editor Thumbnail */}
        <div className="editor-thumbnail">
          <img src="img/bg-img/editor.jpg" alt="" />
        </div>
      </section>
      {/* ##### Editor Area End ##### */}
      {/* ##### Footer Area Start ##### */}
      <footer
        className="footer-area section-padding-100-0 bg-img gradient-background-overlay"
        style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
      >
        {/* Main Footer Area */}
        <div className="main-footer-area">
          <div className="container">
            <div className="row">
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  {/* Widget Title */}
                  <div className="widget-title">
                    <h6>About Us</h6>
                  </div>
                  <img src="img/bg-img/footer.jpg" alt="" />
                  <div className="footer-logo my-4">
                    <img src="img/core-img/logo.png" alt="" />
                  </div>
                  <p>
                    Integer nec bibendum lacus. Suspen disse dictum enim sit
                    amet libero males uada feugiat. Praesent malesuada.
                  </p>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  {/* Widget Title */}
                  <div className="widget-title">
                    <h6>Hours</h6>
                  </div>
                  {/* Office Hours */}
                  <div className="weekly-office-hours">
                    <ul>
                      <li className="d-flex align-items-center justify-content-between">
                        <span>Monday - Friday</span> <span>09 AM - 19 PM</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span>Saturday</span> <span>09 AM - 14 PM</span>
                      </li>
                      <li className="d-flex align-items-center justify-content-between">
                        <span>Sunday</span> <span>Closed</span>
                      </li>
                    </ul>
                  </div>
                  {/* Address */}
                  <div className="address">
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +45 677
                      8993000 223
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      office@template.com
                    </h6>
                    <h6>
                      <img src="img/icons/location.png" alt="" /> Main Str. no
                      45-46, b3, 56832, Los Angeles, CA
                    </h6>
                  </div>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  {/* Widget Title */}
                  <div className="widget-title">
                    <h6>Useful Links</h6>
                  </div>
                  {/* Nav */}
                  <ul className="useful-links-nav d-flex align-items-center">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Properties</a>
                    </li>
                    <li>
                      <a href="#">Listings</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Properties</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Elements</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Single Footer Widget */}
              <div className="col-12 col-sm-6 col-xl-3">
                <div className="footer-widget-area mb-100">
                  {/* Widget Title */}
                  <div className="widget-title">
                    <h6>Featured Properties</h6>
                  </div>
                  {/* Featured Properties Slides */}
                  <div className="featured-properties-slides owl-carousel">
                    {/* Single Slide */}
                    <div className="single-featured-properties-slide">
                      <a href="#">
                        <img src="img/bg-img/fea-product.jpg" alt="" />
                      </a>
                    </div>
                    {/* Single Slide */}
                    <div className="single-featured-properties-slide">
                      <a href="#">
                        <img src="img/bg-img/fea-product.jpg" alt="" />
                      </a>
                    </div>
                    {/* Single Slide */}
                    <div className="single-featured-properties-slide">
                      <a href="#">
                        <img src="img/bg-img/fea-product.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copywrite Text */}
        <div className="copywrite-text d-flex align-items-center justify-content-center">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </footer>
      {/* ##### Footer Area End ##### */}
    </>
  );
}

export default App;
