import { Outlet } from "react-router";
import './App.css'

function App() {

  return (
    <main className="flex justify-center items-center min-h-screen">
      <Outlet />
    </main>
  )
}

export default App
