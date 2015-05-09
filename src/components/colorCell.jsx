import React from "react"

export default class ColorCell extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        var styles = {
            backgroundColor: this.props.color,
            width: '100px',
            height: '100px'
        };

        return (
            <div style={styles} />
        )
    }
}

ColorCell.propTypes = {
    color: React.PropTypes.string
};
