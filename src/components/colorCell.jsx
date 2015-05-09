import React from "react"

export default class ColorCell extends React.Component {
    constructor(props) {
        super();
    }

    handleDragStart(ev) {
         ev.dataTransfer.setData('color', this.props.colorCode);
    }

    render() {
        var styles = {
            backgroundColor: this.props.colorCode,
            width: '100px',
            height: '100px',
            float: 'left'
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
    colorName: React.PropTypes.string.isRequired,
    colorCode: React.PropTypes.string.isRequired
};
