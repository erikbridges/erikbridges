import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Layout from "./Layout";
function Home() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default Home;
