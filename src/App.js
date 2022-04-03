import "./styles/App.css";
import {} from "./styles/AppStyle";

import Header from "./components/header";
import Footer from "./components/footer";
import SubHeader from "./components/subheader";
import CardTitle from "./components/cardtitle";
import PQV from "./components/pqv";
import Sponsors from "./components/sponsors";
import Creators from "./components/creators";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <SubHeader />
        <CardTitle />
        <PQV />
        <Sponsors />
        <Creators />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
