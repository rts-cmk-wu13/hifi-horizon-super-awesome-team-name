import { Outlet } from "react-router"
import Footer from "./components/footer/footer"
import Header from "./components/header/Header"

export default function Layout() {
  return (
    <>
      <Header 
        header="My App"
      />

      <main> 
      <Outlet />
      </main>

      <Footer 
      copyright="2025 My App"
      />
    </>
  )
}
