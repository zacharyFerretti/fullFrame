// JS Components
import React from "react";

// CSS Stylesheets
import "../styling/gallery.css";
import "../styling/stories.css";
import "rsuite/dist/styles/rsuite-default.css";

// 2018 Story Images
import ourayValley from "../images/2018/ourayValley.jpg";
import bells from "../images/2018/bells.jpg";
import drifting from "../images/2018/drifting.jpg";
import oldOrchard from "../images/2018/oldOrchard.jpg";
import quebecFrozen from "../images/2018/quebecFrozen.jpg";
import fiery from "../images/2018/fiery.jpg";
import gemLake from "../images/2018/gemLake.jpg";

const Stories2018 = () => (
  <div>
    <p class="storyText">
      2018 was when I first visited the western United States. I fell in love
      with the wide open ranges and sharp mountain valleys I found in{" "}
      <b>Colorado</b>. Whether it was at the valley floor or it's heights in
      Ouray or standing at the foot of Maroon giants in Aspen everywhere I
      looked I was presented with views that could be stared at for hours and
      still not be fully processed. I was also able to visit the wonderfully
      wintrous city of <b>Quebec, Canada</b>.There I lead a dog-sled crew got a
      private tour of a French-Canadian Chateau and crossed a live-highway to
      pay for a motel at a gas station.
    </p>
    <div class="parent blue">
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${fiery})` }}></div>
        <div class="bottomText">Amherst</div>
        <div class="subTitle">
          November 2018 - these crisp Autumn days are all I can remember when I
          look back on fall in Amherst. There were endless apple cider donuts
          and a crisp breeze in the air that you knew was merely foreplay for a
          wintry cross-breeze on it's way to ruin your day. This photo was taken
          minutes from my dorm in the fall "Baker" in Central. While I was only
          there for a semester I connected more with it than any other on-campus
          housing I had during my time at UMass.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${gemLake})` }}></div>
        <div class="bottomText">Estes Park</div>
        <div class="subTitle">August 2018 - </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${ourayValley})` }}
        ></div>
        <div class="bottomText">Ouray</div>
        <div class="subTitle">August 2018 - Under Construction</div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${bells})` }}></div>
        <div class="bottomText">Aspen</div>
        <div class="subTitle">August 2018 - Under Construction</div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${oldOrchard})` }}
        ></div>
        <div class="bottomText">Old Orchard</div>
        <div class="subTitle">June 2018 - Under Construction</div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${drifting})` }}></div>
        <div class="bottomText">Eastham</div>
        <div class="subTitle">June 2018 - Under Construction</div>
      </div>

      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${quebecFrozen})` }}
        ></div>
        <div class="bottomText">Quebec</div>
        <div class="subTitle">March 2018 - Under Construction</div>
      </div>
    </div>
  </div>
);

export default Stories2018;
