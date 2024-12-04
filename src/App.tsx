import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";

const Home = lazy(() => import("./pages/Home"));
const NoMatch = lazy(() => import("./pages/NoMatch"));

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="*" component={NoMatch} />
    </Router>
  );
};

export default App;
