import React from "react";

class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <div className="project-title">{this.props.title}</div>
                <div className="stack-list">{[this.props.stackList]}</div>
                {this.props.children}
            </div>
        )
    }
}

export default Project;