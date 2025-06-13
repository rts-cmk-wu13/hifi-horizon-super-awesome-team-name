import { Outlet } from "react-router"
import Header from "./components/header/Header"
import Footer from "./components/footer/footer"
import 

export default function Layout() {
  return (
    <>
      <Header />

      <main> 
      <Outlet />
      </main>

      <Footer 
      copyright="2025 My App"
      />
    </>
  )
}
