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

import NotFound from '../pages/404-page'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/projects" element={<NotFound />} />
      <Route path="/project/:slug" element={<NotFound />} />

      {/* Library */}
      <Route path="/library" element={<NotFound />} />
      <Route path="/library/svg/:slug" element={<NotFound />} />
      <Route path="/library/video/:slug" element={<NotFound />} />

      {/* Portfolio */}
      <Route path="/blog" element={<NotFound />}/>
      <Route path="/blog/:slug" element={<NotFound />} />

      {/* 404page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
