import { lazy } from "react"
import { Route, Routes } from "react-router-dom"

const HomePage = lazy(() => import('../modules/home/HomePage'));

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}
