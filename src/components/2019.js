// JS Components
import React from "react";

// CSS Stylesheets
import "../styling/gallery.css";
import "../styling/stories.css";
import "rsuite/dist/styles/rsuite-default.css";

//2019 Story Images
import foggySnow from "../images/2019/foggySnow.JPG";
import toby from "../images/2019/toby.jpg";
import sunAndMoon from "../images/2019/sunAndMoon.jpg";

//April
import venice from "../images/2019/venice.jpg";
import vibrantDolomites from "../images/2019/vibrantDolomites.jpg";
import zermatt from "../images/2019/zermatt.jpg";

//March
import firstArrival from "../images/2019/firstArrival.jpg";
import rainy from "../images/2019/rainy.jpg";
import longExposureDenmark from "../images/2019/longExposureDenmark.jpeg";

//Feb
import seastack from "../images/2019/seastack.jpg";

//Jan
import princes from "../images/2019/princes.jpg";

const Stories2019 = () => (
  <div>
    <p class="storyText">
      2019 was absolutely spectacular. In many ways it represented the
      culmination of a lot of hard work paying off in a most spectacular way. I
      got to spend time travelling to{" "}
      <b>Scotland, Switzerland, England, Germany, Italy, Denmark, Sweden,</b>{" "}
      and <b>Ireland</b> in the Winter and Spring. Throughout the Summer and
      Fall I stayed local in <b>Massachusetts</b> but you really can't go wrong
      with such wonderful woodlands. This year particularly the foliage was
      exquisite and lent itself quite well to Autumnal photography. I also was
      able to go white water rafting for the first time in a small <b>Maine</b>{" "}
      town which only had 36 people living there. To date that is the smallest
      town I've ever been able to visit.
    </p>
    <div class="parent blue">
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${foggySnow})` }}></div>
        <div class="bottomText">Amherst</div>
        <div class="subTitle">
          December 2019 - this morning was absolutely fantastic. I woke up early
          at Logtown and my friend Kaitlyn and I geared up and departed for
          Amethyst Brook. When we arrived it was cold and dark but we began
          walking out towards the field in hopes of catching the morning sun as
          it rose above the pines to our backs. While we were able to capture
          photos of this occurence, I would be hard pressed to say I prefer
          those photos to this one. With the fog in the rear slowly rising as
          the sun hits the frozen icy snow, this plant standing alone makes for
          a much more interesting photograph.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${toby})` }}></div>
        <div class="bottomText">Sunderland</div>
        <div class="subTitle">
          October 2019 - the pioneer valley never fails to deliver in the fall.
          The October of 2019 was particularly fruitful for my photography since
          I had my car to drive all over during my free time. This photo was
          taken on one of the trails on Mt. Toby in Sunderland. I was alone and
          in silence as I made my way up the trail when I found this sprawling
          patch of green in front of a forest of fiery orange and reds. I
          lowered my camera sat down and took the shot before making my way up
          farther towards the fire tower.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${sunAndMoon})` }}
        ></div>
        <div class="bottomText">Raynham</div>
        <div class="subTitle">
          June 2019 - I cannot count the number of times I have gone to the
          Raynham soccer fields in pursuit of a brilliant sunset. This night was
          one of the most fruitful. I adore the way the clouds formed this
          night, as pastel shaded scars streaking across a sea of lapis. The
          moon hung in the sky watching the spectacle as intently as one can.
          But as quick as the light came it went, and I was thankful I got the
          shot when I was able to.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${venice})` }}></div>
        <div class="bottomText">Venice</div>
        <div class="subTitle">
          April 2019 - the canal city of Venice did not cease to amaze. Behind
          every nook and cranny I looked I found something worth photographing,
          whether it be the people that make up the city and the surrounding
          islands or the architecture itself, I was constantly in awe. Finding
          little hide-aways and back alleys to get out to the main canal and
          sitting there watching the boats float by stands as one of the most
          enjoyable memories for me all this time later.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${vibrantDolomites})` }}
        ></div>
        <div class="bottomText">Ortisei</div>
        <div class="subTitle">
          April 2019 - the last full day in Ortisei for me was a day of luck.
          The night before I was strongly considering leaving early as the
          clouds were forecasted to stay in the valley for another day again
          blocking The Dolomites. As I clambered out of bed I saw light hitting
          the valley floor below me and knew I would be able to finally see
          them. I threw together my camera bag and ran down to the cliff side
          and began taking photo after photo of this brilliant display.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${zermatt})` }}></div>
        <div class="bottomText">Zermatt</div>
        <div class="subTitle">
          April 2019 - skiing in Zermatt was world's apart from the other skiing
          I have done. It was icy and the conditions near the bottom of the
          mountain weren't incredible but at the top it was unbelievable. One
          wrong turn and you would go flying off the side of the mountain (it
          did not help that it was a white-out blizzard). But my favorite part
          of that skiing was the drop off where you could jump and fly down the
          side onto the edge trails it was invigorating, (painful when I fell)
          and exciting.
        </div>
      </div>

      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${firstArrival})` }}
        ></div>
        <div class="bottomText">Interlaken</div>
        <div class="subTitle">
          March 2019 - I remember how excited I was as I departed Basel to make
          my way towards the Alps. Stepping off the train in Interlaken I was
          transported to a land that felt like something out of a book. In every
          direction mountain tops loomed above me. I ran to my hostel dropped
          off what I did not need and set out for the waterfront. I sat and
          waited watching a wonderfully calm sun as it set over the valley.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${rainy})` }}></div>
        <div class="bottomText">Edinburgh</div>
        <div class="subTitle">
          March 2019 - simple things can make for beautiful photographs. Take
          this shot out of my bedroom in Scotland as an example. George Burnett
          Hall was my home for a few months and it presented me with an
          incredibly unique base of operations. I was able to walk around the
          campus grounds and forest and explore for days at a time.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${longExposureDenmark})` }}
        ></div>
        <div class="bottomText">Copenhagen</div>
        <div class="subTitle">
          February 2019 - there is not enough time in the world for me to list
          the reasons I love Copenhagen. To name a few it was an incredibly
          green city and ridiculously walkable. You were also able to bike ride
          all over the city. The people were welcoming and the drinks were
          cheap, and you really could not have asked more out of a vacation
          destination.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${seastack})` }}></div>
        <div class="bottomText">Co. Clare</div>
        <div class="subTitle">
          February 2019 - the fighting Irish. Endless pints of Guinness in
          Dublin a stone's throw from the brewery. The Cliffs of Moher right
          after having a traditional Irish lunch. What else could you ask for
          out of your weekend?
        </div>
      </div>

      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${princes})` }}></div>
        <div class="bottomText">Edinburgh</div>
        <div class="subTitle">
          January 2019 - this is Prince's street in Edinburgh, Scotland. I spent
          so many hours walking up and down this street. I remember the first
          time I went to Café Nero and had their coffee in the top of the old
          low-rise overlooking the Castle and the Gardens. After me and my
          friends went out to the clubs (Like Three Sisters) we would ALWAYS go
          to one of the McDonalds on either end of this street before we grabbed
          the bus back to campus.
        </div>
      </div>
    </div>
  </div>
);

export default Stories2019;
