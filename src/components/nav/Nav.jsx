// Importing css and NavLink
import {NavLink} from "react-router-dom";
import "./Nav.css"

// Exporting functional component
export default function Nav(){

  return (
    <nav>
      {/* Homepage/About Me */}
      <NavLink to="/" style={({isActive}) => {
        return isActive ? {} : {};
      }} className="navElement">About Me</NavLink>
      
      {/* Portfolio Page */}
      <NavLink to="/portfolio" style={({isActive}) => {
        return isActive ? {} : {};
      }} className="navElement">Portfolio</NavLink>
      
      {/* Resumé Page */}
      <NavLink to="/resume" style={({isActive}) => {
        return isActive ? {} : {};
      }} className="navElement">Resumé</NavLink>
      
      {/* Contact Page */}
      <NavLink to="/contact" style={({isActive}) => {
        return isActive ? {} : {};
      }} className="navElement">Contact Me</NavLink>
    </nav>    
  )
}