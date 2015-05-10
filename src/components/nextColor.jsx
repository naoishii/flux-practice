import React from "react"

export default class NextColor extends React.Component {

    render() {
        return (
            <div
                className="pure-u-1-2"
            >
                {this.props.request.colorName}
            </div>
        );
    }
}

NextColor.propTypes = {
    request: React.PropTypes.object.isRequired
}
