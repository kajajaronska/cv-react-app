import "../styles/Container.css"; // two dots as I needed to move one directory backwards
// import "../App.css";
import React from 'react';


class Container extends React.Component {
    render() {
        return (
            <div className='Container' id={this.props.id}>
                <h2 className='header'>{this.props.header}</h2>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class TitleAndDateRow extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="title" id={this.props.id}>{this.props.title}</div>
                <div className="date">{this.props.date}</div>
            </div>
        )
    }
}

export default Container;
export {TitleAndDateRow};