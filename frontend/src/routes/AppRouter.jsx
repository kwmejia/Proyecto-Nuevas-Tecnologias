import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LandingPage = lazy(() => import('../modules/home/LandingPage'))
const Description = lazy(() => import('../modules/home/components/description/Description'))
const Services = lazy(() => import('../modules/home/components/services/Services'))
const Contact = lazy(() => import('../modules/home/components/contact/Contact'))
const About = lazy(() => import('../modules/home/components/about/About'))
const NotFoundPage = lazy(() => import('../modules/shared/notFoundPage/NotFoundPage'))

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage/>} />
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Description />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contacto" element={<Contact />} />
          <Route path="quienes-somos" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}
