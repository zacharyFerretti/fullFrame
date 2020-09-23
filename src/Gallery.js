import "./styling/gallery.css";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import Grid from "./Grid";
import React from "react";
import Gallery from "react-photo-gallery";
import "rsuite/dist/styles/rsuite-default.css";
import { Navbar, Nav, Button, Icon, Dropdown } from "rsuite";
import { LazyLoadImage } from "react-lazy-load-image-component";
import mtWhitefacee from "./images/2017/mtWhitefacee.jpg";
import naubinway from "./images/2017/naubinway.jpg";
import chitown from "./images/2017/chitown.jpg";
import acadia from "./images/2017/acadia.jpg";
import pinkBirds from "./images/2017/pinkBirds.jpg";
import doanne from "./images/2019/doanne.jpg";
import oldItalians from "./images/2019/oldItalians.jpg";
import nuhavn from "./images/2019/nuhavn.jpg";
import princes from "./images/2019/princes.jpg";
import alpenGlow from "./images/2019/alpenGlow.jpg";
import sunAndMoon from "./images/2019/sunAndMoon.jpg";
import mtTobyLines from "./images/2019/mtTobyLines.jpg";
import venetianWoman from "./images/2019/venetianWoman.jpg";
import snowedPeak from "./images/2019/snowedPeak.jpg";
import great from "./images/2019/great-sharp.jpg";
import firstArrival from "./images/2019/firstArrival.jpg";
import interlakenBoat from "./images/2019/interlakenBoat.jpg";
import toby from "./images/2019/toby.jpg";
import scottishStones from "./images/2019/scottishStones.jpg";
import ortiseiRidge from "./images/2019/ortiseiRidge.jpg";
import foggySnow from "./images/2019/foggySnow.JPG";
import vibrantDolomites from "./images/2019/vibrantDolomites.jpg";
import edinburghUni from "./images/2019/edinburghUni.jpg";
import fall from "./images/2019/fall.jpg";
import mtTobyRainbow from "./images/2019/mtTobyRainbow.jpg";
import moher from "./images/2019/moher.jpg";
import sigh from "./images/2019/sigh.jpg";
import jungfrau from "./images/2019/jungfrau.jpg";
import veniceFoggy from "./images/2019/veniceFoggy.jpg";
import englishMuseum from "./images/2019/englishMuseum.jpg";
import zermatt from "./images/2019/zermatt.jpg";
import owl from "./images/2019/owl.jpg";
import veniceInShadow from "./images/2019/veniceInShadow.jpg";
import burano from "./images/2019/burano.jpg";
import theLighthouse from "./images/2019/theLighthouse.jpg";
import cliffSwiss from "./images/2019/cliffSwiss.jpg";
import swissMountaintop from "./images/2019/swissMountaintop.jpg";
import Lovely from "./images/2019/Lovely - Basel.jpg";
import ortiseiChurch from "./images/2019/ortiseiChurch.jpg";
import laundry from "./images/2019/laundry.jpg";
import seastack from "./images/2019/seastack.jpg";
import apartmentBlock from "./images/2019/apartmentBlock.jpg";
import bashBishRainbow from "./images/2019/bashBishRainbow.jpg";
import longExposureDenmark from "./images/2019/longExposureDenmark.jpeg";
import art from "./images/2019/art.jpg";
import rainy from "./images/2019/rainy.jpg";
import scottishCloud from "./images/2019/scottishCloud.jpg";
import wideSwiss from "./images/2019/wideSwiss.jpg";
import amethyst from "./images/2019/amethyst.JPG";
import denmarkAlleyway from "./images/2019/denmarkAlleyway.jpg";
import buffam from "./images/2019/buffam.jpg";
import venice from "./images/2019/venice.jpg";
import holdingHands from "./images/2019/holdingHands.jpg";
import fac from "./images/2019/fac.jpg";
import campusRise from "./images/2020/campusRise.jpg";
import lonesomeRiverFlow from "./images/2020/lonesomeRiverFlow.jpg";
import sandyNeckReflection from "./images/2020/sandyNeckReflection.JPG";
import goldMine from "./images/2020/goldMine.jpg";
import bos from "./images/2020/bos.JPG";
import foggyOcean from "./images/2020/foggyOcean.JPG";
import simpleBeach from "./images/2020/simpleBeach.JPG";
import lonesomeCloud from "./images/2020/lonesomeCloud.JPG";
import lastDayUndergrad from "./images/2020/lastDayUndergrad.jpg";
import theWave from "./images/2020/theWave.JPG";
import litCloud from "./images/2020/litCloud.jpg";
import foggyFalls from "./images/2020/foggyFalls.JPG";
import fallsEdge from "./images/2020/fallsEdge.JPG";
import chesterfield from "./images/2020/chesterfield.jpg";
import ricoFog from "./images/2020/ricoFog.jpg";
import singleCloud from "./images/2020/singleCloud.JPG";
import flowBoulder from "./images/2020/flowBoulder.JPG";
import morningGlow from "./images/2020/morningGlow.jpg";
import bloom from "./images/2020/bloom.jpg";
import lilyOfTheValley from "./images/2020/lilyOfTheValley.jpg";
import bashbish from "./images/2020/bashbish.JPG";
import lonesomeFog from "./images/2020/lonesomeFog.jpg";
import sideRiver from "./images/2020/sideRiver.JPG";
import LowerDen from "./images/2020/Lower Den.jpg";
import coloradoTripping from "./images/2018/coloradoTripping.jpg";
import drifting from "./images/2018/drifting.jpg";
import ourayCloud from "./images/2018/ourayCloud.jpg";
import frozen from "./images/2018/frozen church.jpg";
import deer from "./images/2018/deer.jpg";
import bells from "./images/2018/bells.jpg";
import redRocks from "./images/2018/redRocks.jpg";
import gemLake from "./images/2018/gemLake.jpg";
import bakerTree from "./images/2018/bakerTree.jpg";
import pikes from "./images/2018/pikes.JPG";
import quebecFrozen from "./images/2018/quebecFrozen.jpg";
import oldOrchard from "./images/2018/oldOrchard.jpg";
import fallingWaters from "./images/2018/fallingWaters.jpg";
import ourayValley from "./images/2018/ourayValley.jpg";
import newyork from "./images/2018/newyork.jpg";
import amherstCampusWoods from "./images/2018/amherstCampusWoods.jpg";
import bentGem from "./images/2018/bentGem.jpg";
import aspens from "./images/2018/aspens.jpg";
import foggyCanon from "./images/2018/foggyCanon.jpg";
import loneTreeGods from "./images/2018/loneTreeGods.jpg";
import fiery from "./images/2018/fiery.jpg";
import singularBush from "./images/2018/singularBush.jpg";
import oldChapel from "./images/2018/oldChapel.jpg";
import sunset from "./images/2018/sunset.jpg";

function GalleryPage() {
  return (
    <div>
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
      <div class="fullBody">
        <div class="masonry">
          <LazyLoadImage src={mtWhitefacee} class="item hampshire" />
          <LazyLoadImage src={naubinway} class="item" />
          <LazyLoadImage src={chitown} class="item" />
          <LazyLoadImage src={acadia} class="item" />
          <LazyLoadImage src={pinkBirds} class="item mass" />
          <LazyLoadImage src={doanne} class="item mass" />
          <LazyLoadImage src={nuhavn} class="item denmark" />
          <LazyLoadImage src={princes} class="item isles" />
          <LazyLoadImage src={alpenGlow} class="item swiss" />
          <LazyLoadImage src={sunAndMoon} class="item mass" />
          <LazyLoadImage src={mtTobyLines} class="item mass" />
          <LazyLoadImage src={venetianWoman} class="item italy" />
          <LazyLoadImage src={snowedPeak} class="item swiss" />
          <LazyLoadImage src={great} class="item isles" />
          <LazyLoadImage src={firstArrival} class="item swiss" />
          <LazyLoadImage src={interlakenBoat} class="item swiss" />
          <LazyLoadImage src={toby} class="item mass" />
          <LazyLoadImage src={scottishStones} class="item isles" />
          <LazyLoadImage src={ortiseiRidge} class="item italy" />
          <LazyLoadImage src={foggySnow} class="item mass" />
          <LazyLoadImage src={vibrantDolomites} class="item italy" />
          <LazyLoadImage src={edinburghUni} class="item isles" />
          <LazyLoadImage src={fall} class="item mass" />
          <LazyLoadImage src={mtTobyRainbow} class="item mass" />
          <LazyLoadImage src={moher} class="item isles" />
          <LazyLoadImage src={sigh} class="item italy" />
          <LazyLoadImage src={jungfrau} class="item swiss" />
          <LazyLoadImage src={veniceFoggy} class="item italy" />
          <LazyLoadImage src={englishMuseum} class="item isles" />
          <LazyLoadImage src={zermatt} class="item swiss" />
          <LazyLoadImage src={owl} class="item isles" />
          <LazyLoadImage src={veniceInShadow} class="item italy" />
          <LazyLoadImage src={burano} class="item italy" />
          <LazyLoadImage src={theLighthouse} class="item isles" />
          <LazyLoadImage src={cliffSwiss} class="item swiss" />
          <LazyLoadImage src={swissMountaintop} class="item swiss" />
          <LazyLoadImage src={Lovely} class="item swiss" />
          <LazyLoadImage src={ortiseiChurch} class="item italy" />
          <LazyLoadImage src={laundry} class="item italy" />
          <LazyLoadImage src={seastack} class="item isles" />
          <LazyLoadImage src={apartmentBlock} class="item denmark" />
          <LazyLoadImage src={bashBishRainbow} class="item mass" />
          <LazyLoadImage src={longExposureDenmark} class="item denmark" />
          <LazyLoadImage src={art} class="item isles" />
          <LazyLoadImage src={rainy} class="item isles" />
          <LazyLoadImage src={scottishCloud} class="item isles" />
          <LazyLoadImage src={wideSwiss} class="item swiss" />
          <LazyLoadImage src={amethyst} class="item mass" />
          <LazyLoadImage src={denmarkAlleyway} class="item denmark" />
          <LazyLoadImage src={buffam} class="item mass" />
          <LazyLoadImage src={venice} class="item italy" />
          <LazyLoadImage src={holdingHands} class="item isles" />
          <LazyLoadImage src={fac} class="item mass" />
          <LazyLoadImage src={campusRise} class="item mass" />
          <LazyLoadImage src={lonesomeRiverFlow} class="item hampshire" />
          <LazyLoadImage src={sandyNeckReflection} class="item mass" />
          <LazyLoadImage src={goldMine} class="item mass" />
          <LazyLoadImage src={bos} class="item mass" />
          <LazyLoadImage src={foggyOcean} class="item mass" />
          <LazyLoadImage src={simpleBeach} class="item mass" />
          <LazyLoadImage src={lonesomeCloud} class="item hampshire" />
          <LazyLoadImage src={lastDayUndergrad} class="item mass" />
          <LazyLoadImage src={theWave} class="item mass" />
          <LazyLoadImage src={litCloud} class="item hampshire" />
          <LazyLoadImage src={foggyFalls} class="item mass" />
          <LazyLoadImage src={fallsEdge} class="item hampshire" />
          <LazyLoadImage src={chesterfield} class="item mass" />
          <LazyLoadImage src={ricoFog} class="item mass" />
          <LazyLoadImage src={singleCloud} class="item mass" />
          <LazyLoadImage src={flowBoulder} class="item hampshire" />
          <LazyLoadImage src={morningGlow} class="item hampshire" />
          <LazyLoadImage src={bloom} class="item mass" />
          <LazyLoadImage src={lilyOfTheValley} class="item mass" />
          <LazyLoadImage src={bashbish} class="item mass" />
          <LazyLoadImage src={lonesomeFog} class="item hampshire" />
          <LazyLoadImage src={sideRiver} class="item hampshire" />
          <LazyLoadImage src={LowerDen} class="item mass" />
          <LazyLoadImage src={coloradoTripping} class="item colorado" />
          <LazyLoadImage src={drifting} class="item mass" />
          <LazyLoadImage src={ourayCloud} class="item colorado" />
          <LazyLoadImage src={frozen} class="item mass" />
          <LazyLoadImage src={deer} class="item colorado" />
          <LazyLoadImage src={bells} class="item colorado" />
          <LazyLoadImage src={redRocks} class="item colorado" />
          <LazyLoadImage src={gemLake} class="item colorado" />
          <LazyLoadImage src={bakerTree} class="item mass" />
          <LazyLoadImage src={pikes} class="item colorado" />
          <LazyLoadImage src={quebecFrozen} class="item" />
          <LazyLoadImage src={oldOrchard} class="item" />
          <LazyLoadImage src={fallingWaters} class="item hampshire" />
          <LazyLoadImage src={ourayValley} class="item colorado" />
          <LazyLoadImage src={newyork} class="item" />
          <LazyLoadImage src={amherstCampusWoods} class="item mass" />
          <LazyLoadImage src={bentGem} class="item colorado" />
          <LazyLoadImage src={aspens} class="item colorado" />
          <LazyLoadImage src={foggyCanon} class="item hampshire" />
          <LazyLoadImage src={loneTreeGods} class="item colorado" />
          <LazyLoadImage src={fiery} class="item mass" />
          <LazyLoadImage src={singularBush} class="item" />
          <LazyLoadImage src={oldChapel} class="item mass" />
          <LazyLoadImage src={sunset} class="item mass" />
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
