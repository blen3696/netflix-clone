import Header from "./compnents/header/Header.js";
import Fotter from "./compnents/fotter/Fotter.js"
import './App.css';
import Banner from "./compnents/banner/Banner.js";
import RowList from "./compnents/rows/rowlist/RowList.js";


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowList />
      <Fotter />
      
    </div>
  );
}

export default App;
