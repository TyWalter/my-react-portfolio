// Importing css
import "./Footer.css"

// Exporting functional component
export default function Footer(){


  return (
    <div className="footerBox">
      <footer>
        <div className="profileLink">
          {/* Image link to github */}
          <a href="https://github.com/TyWalter" target="_blank"><img src="./images/github.png" alt="github icon" /></a>
          {/* Image link to linkedin */}
          <a href="https://www.linkedin.com/in/tyler-walter-a94a44300/" target="_blank"><img src="./images/linkedin.png" alt="linkedin icon" /></a>
          {/* Image link to stackoverflow */}
          <a href="https://stackoverflow.com/users/25369851/tyler-walter" target="_blank"><img src="./images/stack-overflow.png" alt="stack overflow icon" /></a>
        </div>
      </footer>
    </div>
  )
}