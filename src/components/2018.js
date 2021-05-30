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
        <div class="subTitle">
          August 2018 - it's hard to explain the scale of Rocky Mountain
          National Park. I could say its 5% of the land area of Massachusetts,
          but it's something you have to experience to really understand. Once
          you're in the park you know this is a place where you could get lost
          and spend a lifetime never seeing it all. This day I only saw a small
          percentage of the park, but jumping around the rocks overlooking these
          alpine lakes and starting the day off exploring is something I will
          never forget.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${ourayValley})` }}
        ></div>
        <div class="bottomText">Ouray</div>
        <div class="subTitle">
          August 2018 - ouray was a town full of opportunity. As I began hiking
          towards the edge of the valley I was greeted by a light rain fall and
          the overhang along the ridge provided the perfect respite from the
          rain. As I walked along the ridge I saw the clouds beginning to form
          and take over the mountain range off in the distance.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${bells})` }}></div>
        <div class="bottomText">Aspen</div>
        <div class="subTitle">
          August 2018 - waking up early, hiking to the mountains in the rain,
          and waiting for the sun to hopefully arrive can be upsetting. You
          don't know whether or not the light will materialize and all you can
          do is hope the light comes to fruition. That is part of the thrill of
          landscape photography, the chase. When it does come to fruition you
          can't help but smile as you watch the scene unfold in front of you.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${oldOrchard})` }}
        ></div>
        <div class="bottomText">Old Orchard</div>
        <div class="subTitle">
          June 2018 - this beach is a favorite of mine for the number of time's
          I've gone there with my friends during our many trips to Old Orchard
          Beach (the town). This trip was relaxing, with good food, great drink
          and equally great friends.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${drifting})` }}></div>
        <div class="bottomText">Eastham</div>
        <div class="subTitle">
          June 2018 - sometimes going to a beach can be tough for photography. I
          remember this night walking up and down Nausett Light beach looking
          for something to focus on and add foreground interest to the shot.
          Finally I stumbled upon a piece of driftwood that acted as the perfect
          piece of foreground interest. I stayed with the wood for quite a long
          time following it as the tide trailed it along the shoreline.
        </div>
      </div>

      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${quebecFrozen})` }}
        ></div>
        <div class="bottomText">Quebec</div>
        <div class="subTitle">
          March 2018 - the city and old town blended brilliantly in Quebec. When
          my friends and I went to Montmorency Falls they were completely frozen
          over. What would normally be a mighty flowing river was a solid layer
          of snow and ice strong enough to support snow-mobiles. This shot
          displays brilliantly the scale of these mighty frozen falls. Those two
          tiny dots near the inner part of the river are actually people,
          showing just how massive this phenomenon was.
        </div>
      </div>
    </div>
  </div>
);

export default Stories2018;
