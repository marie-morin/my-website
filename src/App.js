import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projet from "./pages/Projet";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Navigation from "./components/Navigation";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/apropos" exact component={About} />
        <Route path="/projets" exact component={Work} />
        <Route path="/projets/:slug" exact component={Projet} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
