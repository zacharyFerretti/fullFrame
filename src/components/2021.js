// JS Components
import React from "react";

// CSS Stylesheets
import "../styling/gallery.css";
import "../styling/stories.css";
import "rsuite/dist/styles/rsuite-default.css";

// 2020 Story Images
import boston from "../images/2020/bos.JPG";
import foggyFalls from "../images/2020/foggyFalls.JPG";
import bashbish from "../images/2020/bashbish.JPG";
import sideRiver from "../images/2020/sideRiver.JPG";
import foggyOcean from "../images/2020/foggyOcean.JPG";
import theWave from "../images/2020/theWave.JPG";
import simpleBeach from "../images/2020/simpleBeach.JPG";
import lonesomeFog from "../images/2020/lonesomeFog.jpg";
import bloom from "../images/2020/bloom.jpg";

const Stories2021 = () => (
  <div>
    <p class="storyText">
      {" "}
      2020 was a year unlike any that most people will experience in their
      lifetimes. Not only was it the year I graduated but it was also the year
      wee were thrust into the coronavirus pandemic. Something that continually
      was on my mind this year was how much travelling and how many trips I was
      being forced to miss out on but I was able to compensate for that by
      visiting and really becoming closer to the landscapes around me. This set
      features photographs from <b>Massachusetts</b> and <b>New Hampshire</b>,
      just displaying how vast and varied the nature and sceneery of this
      wonderful state can be.{" "}
    </p>
    <div class="parent blue">
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${boston})` }}></div>
        <div class="bottomText">Boston</div>
        <div class="subTitle">
          September 2020 - I consider myself incredibly blessed to be living the
          life I am right now in the city. Boston has held such a special place
          in my heart for so long and the lifestyle I've been afforded by moving
          here is spectacular. I love walking everywhere I need to go and always
          being near so many incredibly interesting sights and sounds.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${boston})` }}></div>
        <div class="bottomText">Boston</div>
        <div class="subTitle">
          September 2020 - I consider myself incredibly blessed to be living the
          life I am right now in the city. Boston has held such a special place
          in my heart for so long and the lifestyle I've been afforded by moving
          here is spectacular. I love walking everywhere I need to go and always
          being near so many incredibly interesting sights and sounds.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${boston})` }}></div>
        <div class="bottomText">Boston</div>
        <div class="subTitle">
          September 2020 - I consider myself incredibly blessed to be living the
          life I am right now in the city. Boston has held such a special place
          in my heart for so long and the lifestyle I've been afforded by moving
          here is spectacular. I love walking everywhere I need to go and always
          being near so many incredibly interesting sights and sounds.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${foggyFalls})` }}
        ></div>
        <div class="bottomText">New Marlborough</div>
        <div class="subTitle">
          August 2020 - as I've mentioned elsewhere in this site many times my
          favorite photographs are not the one's that are readily available to
          you. This forest is not well discussed and off the beaten path. To get
          to this sight is even farther off the path. Beyond winding roots of
          giants, this idyllic view is nestled among the corpses of giants.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          id="pano"
          style={{ backgroundImage: `url(${bashbish})` }}
        ></div>
        <div class="bottomText">Mount Washington</div>
        <div id="panoText" class="subTitle">
          August 2020 - after waking up around one in the morning, and operating
          on a few hours of sleep, I left for western Mass.When I arrived, there
          was no one awake, and I was able to slowly make my way to the falls.
          When I arrived I got low to the ground, and set up to take this shot.
          My feet were frozen as the water rushed over them, but it was well
          worth it when I saw the photo on the back of my camera.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${sideRiver})` }}></div>
        <div class="bottomText">North Conway</div>
        <div class="subTitle">
          August 2020 - the day of this trip was a long one. I woke up, drove
          for three hours, and ran uphill for some time in order to make it up
          to my chosen viewpoint of the morning. While unfortunately the view
          from the perch never materialized, as I was leaving I heard this brook
          and decided it was worth visiting, and I am glad I did.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${foggyOcean})` }}
        ></div>
        <div class="bottomText">Barnstable</div>
        <div class="subTitle">
          August 2020 - sometimes the shots we end up with are not those we
          anticipated. When I woke up this morning and checked the cloud cover,
          I was excited by the prediction of partial clouds, but the scene I was
          presented with at the beach front was vastly different. With thick fog
          all around me, I adapted and ended up with this shot I love for it's
          simplicity.
        </div>
      </div>
      <div class="photoContainer">
        <div
          class="box"
          id="pano"
          style={{ backgroundImage: `url(${theWave})` }}
        ></div>
        <div class="bottomText">Eastham</div>
        <div id="panoText" class="subTitle">
          July 2020 - with a new camera I set out to a place I had never visited
          before. When I arrived the wind was howling all around me and I began
          making my way towards the cliffs. While they were gorgeous and it was
          a delight to watch the sunrise over them, they were not what I was
          after. I had come with one goal in mind, photographing the bent and
          winding trees that Cape Cod is known all to well for. As the sun rose
          through the grove, I was able to capture this perfect shot of the sun
          as it began to illuminate all of the trees on this wonderful morning.
        </div>
      </div>

      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${simpleBeach})` }}
        ></div>
        <div class="bottomText">Truro</div>
        <div class="subTitle">
          August 2020 - this morning was absolutely fantastic, I was able to see
          a whale during a sunrise, spend time with a close friend, and enjoy a
          nice morning on the shorefront. This however was the image that took
          the cake that morning. With dunes presenting a striped pattern that
          was hard to beat, I set up my camera and waited for the light.
        </div>
      </div>

      <div class="photoContainer">
        <div
          class="box"
          style={{ backgroundImage: `url(${lonesomeFog})` }}
        ></div>
        <div class="bottomText">Franconia</div>
        <div class="subTitle">
          July 2020 - the fourth of July 2020 was an incredibly long day. I woke
          up feeling far too nauseas for what I was about to do, but decided to
          do it anyways. I drove with my friends up to Franconia Notch and did
          the hike up to Lonesome Lake. On a normal day it wouldn't have been
          too challenging but as we pulled into the lot I got out of my car and
          vomited. I clambered along anyway and was treated to an incredible
          morning, and the fog on the way back down was absolutely phenomenal
          and lent itself to some wonderfully moody images of the treeline.
        </div>
      </div>
      <div class="photoContainer">
        <div class="box" style={{ backgroundImage: `url(${bloom})` }}></div>
        <div class="bottomText">Amherst</div>
        <div class="subTitle">
          May 2020 - this day was the first one during quarantine where I
          actually did a photo shoot. It was also the first time I had returned
          to campus since we had gone remote during the Spring semester. The
          flowers were fully in bloom and I was able to in the coming month of
          May capture some incredible photos of the campus that you can see more
          of in my gallery.
        </div>
      </div>
    </div>
  </div>
);

export default Stories2021;
