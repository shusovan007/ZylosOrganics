import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter"; // or react-router-dom if that's what you use

// Lazy-loaded imports
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Farms = lazy(() => import("./pages/farms"));
const NotFound = lazy(() => import("./pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/farms" component={Farms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default Router;
