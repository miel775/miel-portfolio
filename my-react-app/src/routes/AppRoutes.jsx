import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

import ProjectsOverview from '../pages/Projects/ProjectsOverview'
import ProjectDetail from '../pages/Projects/ProjectDetail'

import LibraryOverview from '../pages/Library/LibraryOverview'
import LibrarySVGDetail from '../pages/Library/svg/LibrarySVGDetail'
import LibraryVideoDetail from '../pages/Library/video/LibraryVideoDetail'

import BlogOverview from '../pages/Blog/BlogOverview'
import BlogDetail from '../pages/Blog/BlogDetail'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<ProjectsOverview />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />

      {/* Library */}
      <Route path="/library" element={<LibraryOverview />} />
      <Route path="/library/svg/:slug" element={<LibrarySVGDetail />} />
      <Route path="/library/video/:slug" element={<LibraryVideoDetail />} />

      {/* Portfolio */}
      <Route path="/blog" element={<BlogOverview />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  )
}

export default AppRoutes
