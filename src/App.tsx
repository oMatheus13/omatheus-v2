import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import Home from '@pages/Home'
import Sobre from '@pages/Sobre'
import Fragmentos from '@pages/Fragmentos'
import FragmentoPage from '@pages/Fragmento'
import Ferramentas from '@pages/Ferramentas'
import Contato from '@pages/Contato'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/fragmentos" element={<Fragmentos />} />
        <Route path="/fragmentos/:slug" element={<FragmentoPage />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
