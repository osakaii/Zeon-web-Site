import "./styles/util.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import BlogPage from './Pages/Blog/BlogPage';
import CompanyPage from './Pages/Company/CompanyPage';
import NewsInfoPage from './Pages/NewsInfoPage/NewsInfoPage';
import ContactPage from './Pages/Contact/ContactPage';
import CareerPage from './Pages/Career/CareerPage';
import NotFound from "./Pages/NotFound/NotFound";
import DeveloperPage from './Pages/DeveloperPage/DeveloperPage';
import VisitPage from './Pages/VisitPage/VisitPage';
import ScrollTop from "./Common/ScrollTop";
import TestPage from './Pages/TestPage/TestPage';
import SignTest from "./Pages/SignTest/SignTest";

function App() {

  return (
    <div className="App">
      <ScrollTop/>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={'/Blog'} element={<BlogPage/>} />
        <Route path={'/Company'} element={<CompanyPage/>} />
        <Route path={"/Blog/:id"} element={<NewsInfoPage/>} />
        <Route path={"/Contact"} element={<ContactPage/>} />
        <Route path={"/Career"} element={<CareerPage/>} />
        <Route path={"/Career/:id"} element={<DeveloperPage/>} />
        <Route path={"/Visit/*"} element={<VisitPage/>} />
        <Route path={"/test"} element={<TestPage/>} />
        <Route path={"/sign-test/:option"} element={<SignTest/>} />
        <Route path={"*"} element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
