import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ConsultationForm from "./components/ConsultationForm";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Course from "./pages/course"; // 👈 thêm import mới

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultationform" element={<ConsultationForm />} />
          <Route path="/category/:slug" element={<News />} />
          <Route path="/category/:slug/:id" element={<NewsDetail />} />
          <Route path="/course" element={<Course />} /> {/* 👈 thêm route */}
          <Route path="/course/:slug" element={<Course />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
