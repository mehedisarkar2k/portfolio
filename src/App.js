import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl m-5 text-purple-800 font-bold tracking-wider">
        Mehedi Hasan Sarkar
      </h1>
      <div className="flex items-center justify-center text-3xl space-x-4 text-purple-700">
        <a
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-purple-400 transform hover:scale-110 hover:shadow-lg"
          href="https://github.com/mehedisarkar2k"
        >
          <AiFillGithub />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-purple-400 transform hover:scale-110 hover:shadow-lg"
          href="https://www.linkedin.com/in/mehedisarkar2k/"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-purple-400 transform hover:scale-110 hover:shadow-lg"
          href="https://www.facebook.com/MehediSarkar2k"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
}

export default App;
