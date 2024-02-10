import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <BrowserRouter>
      <section className="px-0">
        <Header />
        <div className="row mx-0 main-container">
          <div className="col px-0">
            <aside className="pages h-100 py-3">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </aside>
          </div>
        </div>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
