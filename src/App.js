import "./App.css";
import NavBarPeakU from "./layouts/navbar";
import SearchBar from "./layouts/searchbar";
import Cards from "./components/card";

function App() {
  return (
    <div className="App">
      <NavBarPeakU />
      <SearchBar />
      <Cards />
    </div>
  );
}

export default App;
