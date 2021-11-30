import "./App.css";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      <Banner />
      <Project/>
    </div>
  );
}

export default App;
