import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="Skills">
        <h2>{this.props.skillType} Skills</h2>
        <ul>
          {this.props.skillsArr.map(skill => 
            (<li key={skill.id}>{skill.name}</li>)
          )}
        </ul>
      </div>
    );
  }
}

export default Skills;
