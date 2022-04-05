import "./styles/App.css";
import {} from "./styles/AppStyle";

import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/subheader";
import PQV from "./components/pqv";
import Sponsors from "./components/sponsors";
import Creators from "./components/creators";

function App() {
  return (
    <div className="App">
      <div className="pattern"></div>
      <Header />
      <div>
        <SubHeader />
        <PQV />
        <Sponsors />
        <Creators />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
