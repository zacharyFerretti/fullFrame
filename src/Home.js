import React from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";
import bash from "./images/2020/bashbish.JPG";
import foggyOcean from "./images/2020/foggyOcean.JPG";
import simpleBeach from "./images/2020/simpleBeach.JPG";
import BackgroundSlider from "react-background-slider";
import { Helmet } from "react-helmet";

const TITLE = "the full frame";

function Home() {
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div id="header-no-border">
        <Link id="HomeLink" to="/">
          ZACH FERRETTI
        </Link>
      </div>
      <div id="centeredHero">
        the full <br /> frame
      </div>
      <div id="centeredHero">
        <button id="buttonStyle">
          <Link id="fontColoring" to="/Gallery">
            VIEW GALLERY <br />
          </Link>
        </button>
      </div>
      <div id="shadow"></div>
      <div id="footer">
        <Link id="HomeLink" to="/Stories">
          stories
        </Link>
      </div>
      <BackgroundSlider
        images={[bash, simpleBeach, foggyOcean]}
        transition={0.5}
        duration={5}
      ></BackgroundSlider>
    </div>
  );
}
/*const heroImages = [bash, foggyOcean, simpleBeach];
const node = document.getElementById("root");
if (node != null) {
  console.log("HERE WE GO");
  const cycleImages = (images, container, step) => {
    images.forEach((image, index) =>
      setTimeout(() => {
        container.style.backgroundImage = `url(${image})`;
      }, step * (index + 1))
    );
    setTimeout(
      () => cycleImages(images, container, step),
      step * images.length
    );
  };
  cycleImages(heroImages, node, 5000);
}*/

export default Home;
