import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import { ToastContainer } from "react-toastify"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Redirect } from "./pages/Redirect"

export const App = () => {
  return (
    <main className="bg-gray-200 w-full h-screen flex items-center justify-center px-3 py-8 lg:px-0 lg:py-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:shortURL" element={<Redirect />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </main>
  )
}
