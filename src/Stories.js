// JS Components
import React from "react";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button, Icon, Dropdown } from "rsuite";

// CSS Stylesheets
import "./styling/gallery.css";
import "./styling/stories.css";
import "rsuite/dist/styles/rsuite-default.css";

import Stories2017 from "./components/2017";
import Stories2018 from "./components/2018";
import Stories2019 from "./components/2019";
import Stories2020 from "./components/2020";

function Gallery() {
  const [show2017, setShow2017] = React.useState(false);
  const [show2018, setShow2018] = React.useState(false);
  const [show2019, setShow2019] = React.useState(false);
  const [show2020, setShow2020] = React.useState(false);
  const [isShown2020, setIsShown2020] = React.useState(false);
  const onClick2017 = () => {
    setShow2017(!show2017);
    setShow2018(false);
    setShow2019(false);
    setShow2020(false);
  };
  const onClick2018 = () => {
    setShow2017(false);
    setShow2018(!show2018);
    setShow2019(false);
    setShow2020(false);
  };
  const onClick2019 = () => {
    setShow2017(false);
    setShow2018(false);
    setShow2019(!show2019);
    setShow2020(false);
  };
  const onClick2020 = () => {
    setShow2017(false);
    setShow2018(false);
    setShow2019(false);
    setShow2020(!show2020);
  };
  return (
    <div className="Temp">
      <Navbar>
        <Navbar.Header></Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item>
              <Link to="/" id="homeLink">
                Zachary Ferretti
              </Link>
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item>
              <Link to="/Gallery" id="galleryLink">
                Gallery
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/Stories" id="galleryLink">
                Stories
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
      {/*
        
        2020 Story Section

      */}
      {/*<p class="storyText">Where was I in...</p>*/}
      <div id="buttonRow">
        <button onClick={onClick2020} class="FilteringButtons">
          {show2020 ? <p style={{ color: `rgba(0,0,0,.5)` }}>2020</p> : 2020}
        </button>
        <button onClick={onClick2019} class="FilteringButtons">
          {show2019 ? <p style={{ color: `rgba(0,0,0,.5)` }}>2019</p> : 2019}
        </button>
        <button onClick={onClick2018} class="FilteringButtons">
          {show2018 ? <p style={{ color: `rgba(0,0,0,.5)` }}>2018</p> : 2018}
        </button>
        <button onClick={onClick2017} class="FilteringButtons">
          {show2017 ? <p style={{ color: `rgba(0,0,0,.5)` }}>2017</p> : 2017}
        </button>
        {show2017 || show2018 || show2019 || show2020 ? null : (
          <p style={{ color: `rgba(0,0,0,.5)` }}> Go ahead click one...</p>
        )}
      </div>
      {show2020 ? <Stories2020 /> : null}
      {show2019 ? <Stories2019 /> : null}
      {show2018 ? <Stories2018 /> : null}
      {show2017 ? <Stories2017 /> : null}
    </div>
  );
}

export default Gallery;
