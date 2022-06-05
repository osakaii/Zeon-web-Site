import "./App.css";
import "./styles/util.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import BlogPage from './Pages/Blog/BlogPage';
import CompanyPage from './Pages/Company/CompanyPage';
import NewsInfoPage from './Pages/NewsInfoPage/NewsInfoPage';
import ContactPage from './Pages/Contact/ContactPage';
import CareerPage from './Pages/Career/CareerPage';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/company" element={<CompanyPage/>} />
        <Route path="/blog/:id" element={<NewsInfoPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/career" element={<CareerPage/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
