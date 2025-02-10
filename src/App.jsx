import { BrowserRouter, Outlet, Route, Router } from "react-router";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;





