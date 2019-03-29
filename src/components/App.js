import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Layout from "./Layout";
function Home() {
  return (
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Layout>
      </Switch>
    </HashRouter>
  );
}

export default Home;
