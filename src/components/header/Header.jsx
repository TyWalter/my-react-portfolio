// Importing css, nav, and Link
import {BrowserRouter, Link} from "react-router-dom";
import Nav from "../nav/Nav"
import "./Header.css"

// Exporting functional component
export default function Header(){

  return (
    <BrowserRouter>
      <header>
        {/* Image links to homepage */}
        <Link to="/"><img className="logo" src="./images/Tyler.png" alt="Tyler Walter Fox Logo" /></Link>
        <Nav />
      </header>
      
    </BrowserRouter>
  )
}