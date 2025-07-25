import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Redirect } from "./pages/Redirect"

export const App = () => {
  return (
    <main className="bg-gray-200 w-full h-screen flex items-center justify-center px-3 py-8 lg:px-0 lg:py-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/redirecionando" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  )
}
