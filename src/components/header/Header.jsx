// Importing css, nav, and Link
import {Link} from "react-router-dom";
import Nav from "../nav/Nav"
import "./Header.css"

// Exporting functional component
export default function Header(){

  return (
    // <BrowserRouter>
      <div className="headerBox">
        <header>
          {/* Image link to homepage */}
          <div className="logoLink">
            <Link to="/"><img className="logo" src="/images/Tyler.png" alt="Tyler Walter Fox Logo" /></Link>
          </div>
          <Nav />
        </header>
      </div>
    // </BrowserRouter>
  )
}