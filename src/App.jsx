import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import IndexPage from "./pages/IndexPage";
import SkillsPage from "./pages/SkillsPage";
import GalleryPage from "./pages/GalleryPage";
import AboutMe from "./pages/AboutMe";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/index" element={<IndexPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}