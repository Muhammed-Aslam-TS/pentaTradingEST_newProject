import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProjectPage } from "./pages/ProjectPage";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
