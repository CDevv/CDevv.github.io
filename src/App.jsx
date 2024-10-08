import { Router, Route } from "@solidjs/router";
import { DbProvider } from "./components/DbContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

const filters = {
  id: /^\d+$/
}

function App() {
  return (
    <>
      <Router root={Layout}>
        <Route path="/" component={Home}></Route>
        <Route path="/about-me" component={AboutMe}></Route>
        <Route path="/cv" component={CV}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/projects/:id" component={Project} matchFilters={filters}></Route>
        <Route path="/contacts" component={Contact}></Route>
      </Router>
    </>
  );
}

export default App;
