import "./App.css";
import "./util.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import BlogPage from './Pages/Blog/BlogPage';
import CompanyPage from './Pages/Company/CompanyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/company" element={<CompanyPage/>} />
      </Routes>
    </div>
  );
}

export default App;
