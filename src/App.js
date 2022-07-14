import MovieList from "./components/MovieList";
import { BrowserRouter , Router, Routes, Route, Link} from "react-router-dom";
import TestingCom from "./components/TestingCom.js"
import RouteGenerator from "./components/RouteGenerator.js"

function App() {
  return (
    <RouteGenerator/>
  );
}

export default App;
