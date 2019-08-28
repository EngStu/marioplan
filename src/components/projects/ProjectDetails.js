import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;  
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>LoremSint mollit dolor nulla aliqua eu. Qui ipsum eu non qui reprehenderit laboris nisi esse Lorem do sit non mollit. Cupidatat ex aute voluptate anim nulla incididunt magna elit ut.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by the Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails