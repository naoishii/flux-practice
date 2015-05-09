import React from "react"

export default class ColorCell extends React.Component {
    constructor(props) {
        super();
    }

    handleDragStart(ev) {
         ev.dataTransfer.setData('color', this.props.color);
    }

    render() {
        var styles = {
            backgroundColor: this.props.color,
            width: '100px',
            height: '100px'
        };

        return (
            <div
                style={styles}
                draggable="true"
                onDragStart={this.handleDragStart.bind(this)}
            />
        )
    }
}

ColorCell.propTypes = {
    color: React.PropTypes.string.isRequired
};
