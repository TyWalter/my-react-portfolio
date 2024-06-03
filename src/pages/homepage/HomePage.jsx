// Importing css
import "./HomePage.css";

// Exporting functionable page
export default function HomePage(){

  return (
    <div className="container">
      <div className="spacer"></div>
      <main className="mainAbout">
        <img src="./images/tylerwalter.png" alt="image of tyler walter" className="tylerImage" />
        <div className="aboutMe px-5">
          <h1>About Me</h1>
          <p>Hello! I'm Tyler Walter, a passionate web developer with a unique and varied professional background. I recently completed the web-development bootcamp at the University of Minnesota, where I honed my skills in software development, problem-solving, and collaborative teamwork.</p>
          <h5>My Journey</h5>
          <p>My path to web development has been anything but traditional, and I believe my diverse experiences have shaped me into a well-rounded and adaptable developer. Prior to my transition into tech, I worked in several different professions, including:</p>
          <ul>
            <li><span>Audio Visual Installation Technician (approximately 1.5 years):</span> Focused on delivering on client requirements, attention to detail, and meeting deadlines. This role enhanced my ability to meet client expectations and troubleshoot effectively.</li>
            <li><span>Hardscaping and Stone Laying (over 7 years):</span> Learned meticulous planning, creativity, and a strong work ethic.</li>
            <li><span>Delivery Driver and Manager (approximately 1.5 years):</span> Developed time management skills, reliability, and adaptability.</li>
          </ul>
          <p>These roles, along with others, taught me valuable lessons that I now bring to my work as a web developer.</p>
          <h5>Why Web Development?</h5>
          <p>While I found fulfillment in each of my previous roles, I was always drawn to technology and problem-solving. The bootcamp at the University of Minnesota was a transformative experience that allowed me to channel my creativity and technical skills into building dynamic and responsive websites. I am particularly passionate about creating user-friendly interfaces and ensuring a seamless user experience.</p>
          <h5>Skills and Technologies</h5>
          <ul>
            <li><span>Tools and Platforms:</span> Bash, GitHub, VS Code, Render, Netlify</li>
            <li><span>Soft Skills:</span> Problem-solving, teamwork, attention to detail, adaptability</li>
          </ul>
          <h5>Personal Life</h5>
          <p>Outside of coding, I'm a family-oriented person. I am happily married, and my wife and I are eagerly expecting our first child in September. In my free time, I also enjoy the occasional game of frisbee and playing with my dog.</p>
          <h5>What I Bring to the Table</h5>
          <p>My non-linear career path has equipped me with a unique perspective and a diverse set of skills. I approach web development with the same dedication and attention to detail that I brought to hardscaping and AV installation. I thrive in collaborative environments and am always eager to learn and take on new challenges.</p>
          <h5>Let's Connect!</h5>
          <p>I'm excited to continue my journey in web development and am always looking for new opportunities to grow and contribute. Feel free to contact me or connect with me on LinkedIn. Let's create something amazing together!</p>
        </div>
      </main>
    </div>
  )
};