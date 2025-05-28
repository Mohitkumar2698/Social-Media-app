import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Support from "./pages/Support";
import Esports from "./pages/Esports";
import News from "./pages/News";
import GamingZone from "./pages/GamingZone";
import Store from "./pages/Store";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/gamingzone" element={<GamingZone />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<Store />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
};
export default App;
