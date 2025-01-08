import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect } from "react"

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
