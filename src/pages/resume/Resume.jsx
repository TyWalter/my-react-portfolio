// Importing css
import "./Resume.css"

// Exporting functional page
export default function ResumePage(){

  return (
    <div className="container">
      <div className="spacer"></div>
      <section>
        <div className="resume">
          <a href="/tyler.pdf" download><h3>Resumé Download</h3></a>
        </div><br></br><br></br>
        <div className="row justify-content-around">
          <aside className="col-5">
            <h4>Front-end Proficiencies</h4><br></br>
            <div className="asterisk">
              <h6>» HTML «</h6>
              <h6>» CSS «</h6>
              <h6>» Javascript «</h6>
              <h6>» jQuery «</h6>
              <h6>» Responsive Designs «</h6>
              <h6>» React «</h6>
              <h6>» Bootstrap «</h6>
              <h6>» OOP «</h6>
            </div>
          </aside>
          <aside className="col-5">
            <h4>Back-end Proficiencies</h4><br></br>
            <div className="asterisk">
              <h6>» Node «</h6>
              <h6>» APIs «</h6>
              <h6>» Express «</h6>
              <h6>» Mongo/Mongoose «</h6>
              <h6>» Postgres «</h6>
              <h6>» Sequelize «</h6>
              <h6>» MERN «</h6>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}