import Navbar from "./components/Navbar/Navbar";
import NavbarMedia from "./components/Navbar/NavbarMedia";

import Typography from "./components/Typography/Typography";
function App() {
  return (
    <div className="container">
      <NavbarMedia />
      <Navbar />
      <Typography />
    </div>
  );
}

export default App;
