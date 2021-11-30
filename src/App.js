import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Router>
        <Switch>
          <Route path="/">
            <Banner />
            <Nav />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
