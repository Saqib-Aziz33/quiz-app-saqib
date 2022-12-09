import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
// layout
import Base from "./components/layouts/Base";
// other
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  return (
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/test" element={<Test />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Base>
    </BrowserRouter>
  );
}
export default App;
