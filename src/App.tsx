import { BrowserRouter, Routes, Route } from "react-router-dom"
import PasswordComponent from "./Password"
import Videos from "./videos"
import Header from "./headers"
import Powerpoints from "./powerpoints"
import All from "./all"
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<PasswordComponent />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/powerpoints" element={<Powerpoints />}></Route>
          <Route path="/all" element={<All />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
