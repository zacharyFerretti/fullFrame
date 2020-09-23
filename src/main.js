import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import GalleryPage from "./Gallery";
import Stories from "./Stories";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/gallery" component={GalleryPage}></Route>
      <Route exact path="/stories" component={Stories}></Route>
    </Switch>
  );
};

export default Main;
