import React from "react"

export default class NextColor extends React.Component {

    render() {
        return (
            <div
                className="pure-u-1-2"
            >
                {this.props.request}
            </div>
        );
    }
}

NextColor.propTypes = {
    request: React.PropTypes.string.isRequired
}
