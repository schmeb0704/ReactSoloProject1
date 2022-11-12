import Profile from "./components/Profile.js";

import Footer from "./components/Footer.js";
import About from "./components/About.js";

export default function App() {
  return (
    <div className="card">
      <Profile />
      <About />
      <Footer />
    </div>
  );
}
