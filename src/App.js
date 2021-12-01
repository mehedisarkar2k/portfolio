import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Project from "./components/Projects/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='flex flex-col items-center min-h-screen w-full'>
      <Router>
        <Switch>
          <Route path='/'>
            <Banner />
            <Nav />
            <About />
            <Project />
            <Contact />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
