import React from "react"

export default class NextColor extends React.Component {
    render() {
        var styles = {
            color: this.props.request.dummy.colorCode,
            fontSize: "30px",
            backgroundColor: "#333"
        };

        return (
            <div
                style={styles}
                className="pure-u-1-2"
            >
                {this.props.request.expect.colorName}
            </div>
        );
    }
}

NextColor.propTypes = {
    request: React.PropTypes.object.isRequired
}
