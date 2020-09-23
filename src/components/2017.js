// JS Components
import React from "react";

// CSS Stylesheets
import "../styling/gallery.css";
import "../styling/stories.css";
import "rsuite/dist/styles/rsuite-default.css";

// 2017 Story Images
import summitSunrise from "../images/2017/mtWhitefacee.jpg";
import pinkBirds from "../images/2017/pinkBirds.jpg";
import naubinway from "../images/2017/naubinway.jpg";
import chitown from "../images/2017/chitown.jpg";
import acadia from "../images/2017/acadia.jpg";

const Stories2017 = () => (
  <div>
    <p class="storyText">
      2017 was the first year where I truly realized my love to travel and
      explore the world. In August I was blessed enough to visit{" "}
      <b>Iowa, Illinois, Michigan, Canada, New York</b> and to go backpacking in
      remote <b>New Hampshire</b>. In Michigan I stayed in a town with only
      around 630 people. In Canada I was able to visit the hometown of Bobby
      Orr, and try some incredible local beer before going to Niagara Falls the
      next day.
    </p>
    <div class="parent blue">
      <div class="photoContainer">
        <div
          class="box"
          id="pano"
          style={{ backgroundImage: `url(${summitSunrise})` }}
        ></div>
        <div class="bottomText">Grafton</div>
        <div class="subTitle" style={{ maxWidth: `51vw` }}>
          August 2017 - to get this view was tiring. Some friends and I hiked 10
          miles all-day saturday up a mountain and arrived at a beautiful range
          where we planned to spend the night. That night it was cloudy, and
          rainy but we were there and were determined to spend the night. I am
          glad we did, the next morning the weather was perfect, and we were
          treated to this beautiful glow submerging the mountaintops as the sun
          rose behind us.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${naubinway})` }}></div>
        <div class="bottomText">Naubinway</div>
        <div class="subTitle">
          August 2017 - Visiting this town was surreal. My friends and I went to
          a restaurant/bar that had one woman working as the waitress, the
          bartender and the cook. She actively told us what was not good and
          what to avoid. Right on lake Michigan the morning after arriving my
          friend Dan and I went out to the lake and did a morning plunge in. It
          was excruciatingly cold, and afterwards we rushed back to the motel to
          warm up before continuing on our journey.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${chitown})`, width: `20vw` }}
        ></div>
        <div class="bottomText">Chicago</div>
        <div class="subTitle" style={{ maxWidth: `25vw` }}>
          August 2017 - Something about Chicago really hit different for me. I
          loved Lake Michigan and the architecture was outstanding. The food
          unfortunately left much to be desired.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${pinkBirds})`, width: `20vw` }}
        ></div>
        <div class="bottomText">Orleans</div>
        <div class="subTitle" style={{ maxWidth: `25vw` }}>
          August 2017 - To me this morning represents the first true photo-shoot
          I went on. I wasn't focused on getting a picture of me, I was focused
          on capturing the nature around me and the sunrise this morning over
          the Atlantic delivered.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${acadia})` }}></div>
        <div class="bottomText">Bar Harbor</div>
        <div class="subTitle">
          July 2017 - Getting this shot required the perfect intersection of
          timing and luck. I couldn't have been more lucky. I was out all day
          and right as I snapped the shutter on this photo my camera died. I was
          devastated I missed the shot of the bird in front of the setting sun,
          but when I got home and checked I was ecstatic that it was there.
        </div>
      </div>
    </div>
  </div>
);

export default Stories2017;
