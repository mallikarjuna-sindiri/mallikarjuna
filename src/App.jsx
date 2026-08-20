import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Routes wrapped in persistent Header + Footer layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
        
        {/* Standalone case study detail view */}
        <Route path="/project/:slug" element={<ProjectCaseStudyPage />} />
      </Routes>
    </>
  );
}
